import BoardWriteUI from "./BoardWrite.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import type { ChangeEvent, MouseEvent } from "react";
import { useEffect, useState } from "react";
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
  // 게시글 작성 페이지 (작성이기 때문에 isEdit값은 false)
  const router = useRouter();

  // 버튼 활성화, 주소창 모달을 위한 state
  const [isActive, setIsActive] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // 게시글 필수항목 state
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // 게시글 부가항목 state
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [files, setFiles] = useState(["", "", ""]);
  // 게시글 작성 안했을시 오류 보여주는 state
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  // 게시글 작성 mutation
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  // 게시글 수정 mutation
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  /** 작성자 input창에 입력시 나타나는 이벤트 */
  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.currentTarget.value); // 입력에 따른 writer 값 설정
    // 오류 발생했다가 입력하면 Error를 지워주기 위한 조건문
    if (e.target.value !== "") setWriterError("");

    // 값 입력시 전부다 입력되어있다면 등록 버튼 활성화 아니면 비활성화
    if (e.target.value && password && title && contents) setIsActive(true);
    else setIsActive(false);
  };
  /** 비밀번호 input창에 입력시 나타나는 이벤트 */
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value); // 입력에 따른 password 값 설정
    // 오류 발생했다가 입력하면 Error를 지워주기 위한 조건문
    if (e.target.value !== "") setPasswordError("");

    // 값 입력시 전부다 입력되어있다면 등록 버튼 활성화 아니면 비활성화
    if (writer && e.target.value && title && contents) setIsActive(true);
    else setIsActive(false);
  };

  /** 제목 input창에 입력시 나타나는 이벤트 */
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value); // 입력에 따른 title 값 설정
    // 오류 발생했다가 입력하면 Error를 지워주기 위한 조건문
    if (e.target.value !== "") setTitleError("");

    // 값 입력시 전부다 입력되어있다면 등록 버튼 활성화 아니면 비활성화
    if (writer && password && e.target.value && contents) setIsActive(true);
    else setIsActive(false);
  };

  /** 내용 input창에 입력시 나타나는 이벤트 */
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContents(e.target.value); // 입력에 따른 contents 값 설정
    // 오류 발생했다가 입력하면 Error를 지워주기 위한 조건문
    if (e.target.value !== "") setContentsError("");

    // 값 입력시 전부다 입력되어있다면 등록 버튼 활성화 아니면 비활성화
    if (writer && password && title && e.target.value) setIsActive(true);
    else setIsActive(false);
  };

  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
    setYoutubeUrl(e.target.value);
  };
  const onChangeDetailAddress = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddressDetail(e.target.value);
  };

  /** modal창의 boolean값을 state prev를 통해 바꿔주면서 on off 해준다 */
  const onClickPost = (): void => {
    setIsOpenModal((prev) => !prev);
  };

  /*  files state를 prop로 넘겨주고 그 값을 함수의 인자로 다시 받아서
      스프레드 연산자를 통해서 새로운 배열을 만들고 그 값을 state에 교환해서 넣는다
  */
  const onChangeFiles = (file: string, index: number): void => {
    // file값은 url값 index는 해당하는 number값.
    const newFiles = [...files];
    // newFiles = ["","",""]
    newFiles[index] = file;
    // newFiles = ["url","",""]
    setFiles(newFiles);
    // files === newFiles
  };

  /*  수정하기 페이지가 처음 실행될때, props.data가 실행될때, 수정하기 페이지가 사라지기 전에 실행됨. 
      files의 초기값은 ["","",""] 이지만 useEffect로 files의 값을 기존의 값으로 채워주도록 했다.
      fetchBoard.Data를 images의 저장하고 그 값이 null이 아닐때 setFile로 값을 수정해서 수정페이지 초기화면에 기존의 이미지를 띄워줬다
      따라서 새로운 이미지를 추가할때 동작하는 것이 아니라 fetch할때 동작하는것이다.
  */
  useEffect(() => {
    // images 변수에 fetch한 이미지 데이터를 받는다.
    const images = props.data?.fetchBoard.images;

    // image가 빈값이거나 indefined가 아니면 setFiles에 이미지 데이터값을 채워준다.
    if (images !== undefined && images !== null) setFiles([...images]);
  }, [props.data]);

  /** 
    모달창의 ok버튼을 눌렀을때 동작할 함수
    데이터를 state의 저장하고 모달창을 false로 닫아준다
   */
  const handleComplete = (data: Address): void => {
    setZipcode(data.zonecode);
    setAddress(data.jibunAddress);
    setIsOpenModal(false);
  };

  /** 게시글의 등록하기 버튼을 눌렀을때 호출하는 함수
   *  오류검사, board api요청 페이지 이동등의 기능이 있다.
   */
  const onClickSubmit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!writer) setWriterError("작성자를 입력해주세요");
    if (!password) setPasswordError("비밀번호를 입력해주세요");
    if (!title) setTitleError("제목을 입력해주세요");
    if (!contents) setContentsError("내용을 입력해주세요");

    if (writer && password && title && contents) {
      try {
        // createBoard({ variables : api요청에 넣을 값 }) 을 result에 저장
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                // address는 객체 형태로 데이터를 받음
                zipcode,
                address,
                addressDetail,
              },
              images: [...files],
            },
          },
        });
        // create요청이 실패하면 _id 속성이 없으니 error발생 아니면 성공
        if (result.data?.createBoard._id === undefined) {
          Modal.error({ content: "요청에 문제가 있습니다" });
          return;
        }
        Modal.success({ content: "게시글 등록에 성공하셨습니다" });
        // 등록이 성공하면 등록한 게시글 상세 페이지 이동
        void router.push(`/boards/${result?.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  /** 수정하기 버튼 클릭 함수 */
  const onClickEdit = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault(); // 버튼 클릭시 스크롤 이동을 막기 위해 사용

    // files는 ["url","",""] 로 되어있기때문에 복사하려면 스프레드 연산자등을 사용해야함.
    // 그래서 간편하게 JSON.stringify로 값을 변환해서 비교함
    const currentFile = JSON.stringify(files);
    const defaultFile = JSON.stringify(props.data?.fetchBoard.images);
    // currentFile = files의 JSON값, defaultFile = fetchBoard한 JSON값
    // 이 두개를 비교한 값을 isChangeFile에 저장 ==> useEffect에 의해서 currentFile은 사진이 바뀌면 변경됨
    const isChangedFile = currentFile !== defaultFile;
    // useRouter가 동작하지 않아 값이 읽히지 않을때를 대비
    if (!router || typeof router.query.boardId !== "string") return;

    // updateBoardInput 형식으로 데이터를 받기때문에 수정할 데이터 객체를 하나 생성함.
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    // 주소에 들어갈 항목이 다 있으면 address객체 생성해서 데이터 넣어줌
    if (zipcode && address && addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    // 원래 files의 값과 바뀐 file의 값이 다르면 images에 바뀐 files값을 넣어줌
    if (isChangedFile) updateBoardInput.images = files;

    try {
      const updateResult = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      if (updateResult.data?.updateBoard._id === undefined) {
        Modal.error({ content: "요청에 문제가 있습니다" });
        return;
      }
      Modal.success({ content: "게시글 수정에 성공하셨습니다" });
      void router.push(`/boards/${updateResult.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
      files={files}
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
      onChangeFiles={onChangeFiles}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
