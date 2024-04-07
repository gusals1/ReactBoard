import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { Modal } from "antd";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import type { IBoardWriteProps } from "./BoardWrite.types";
import type { Address } from "react-daum-postcode";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.currentTarget.value);

    if (e.target.value !== "") {
      setWriterError("");
    }

    if (e.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);

    if (e.target.value !== "") {
      setPasswordError("");
    }
    if (writer && e.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);

    if (e.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && e.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value);

    if (e.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  // youtube url과 상세 주소 입력란의 데이터를 state로 받아오기 위한 함수
  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(e.target.value);
  };

  const onChangeDetailAddress = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(e.target.value);
  };
  // address 입력 모달창에 사용되는 기능

  /** 꺼져있던 address 모달을 state prev를 이용해 true로 바꿔줌. */
  const onClickPost = (): void => {
    setIsOpenModal((prev) => !prev);
  };

  /** 모달창(모달창은 라이브러리로 받아온 주소 입력창이다)이 켜지고
   *  ok버튼을 눌렀을때 동작할 함수
   */
  const handleComplete = (data: Address): void => {
    setZipcode(data.zonecode);
    setAddress(data.jibunAddress);
    setIsOpenModal(false);
  };
  /** 등록하기 버튼을 눌렀을때 작동 */
  const onClickSubmit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!writer) {
      setWriterError("작성자를 입력해주세요");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl, // youtube 인자 추가
              boardAddress: {
                // address mutation입력하는 형식 추가
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        if (result.data?.createBoard._id === undefined) {
          Modal.error({ content: "요청에 문제가 있습니다" });
          return;
        }
        Modal.success({ content: "게시글 등록에 성공하셨습니다" });

        void router.push(`/boards/${result?.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({ content: error.message });
        }
      }
    }
  };
  /** 수정하기 버튼 클릭시 발생하는 함수 */
  const onClickEdit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!router || typeof router.query.boardId !== "string") return;

    const updateBoardInput: IUpdateBoardInput = {};
    // 수정하기 페이지에서 각 항목의 내용이 있으면 updateBoardInput 배열에 추가한다.
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    // 주소 항목이 다 들어가있으면 배열 안에 주소 배열을 추가해서 그 배열안에 데이터 추가( 주소는 중첩객체 형태로 되어있음.)
    if (zipcode && address && addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      const update = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      if (update.data?.updateBoard._id === undefined) {
        Modal.error({ content: "요청에 문제가 있습니다" });
        return;
      }
      Modal.success({ content: "게시글 수정에 성공하셨습니다" });
      await router.push(`/boards/${update.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isOpenModal={isOpenModal}
      zipcode={zipcode}
      address={address}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeDetailAddress={onChangeDetailAddress}
      onClickPost={onClickPost}
      handleComplete={handleComplete}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
