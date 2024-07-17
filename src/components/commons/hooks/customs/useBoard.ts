import { Modal } from "antd";
import { useMutationDeleteBoard } from "../mutations/useMutationDeleteBoard";
import { useRouter } from "next/router";
import { useMutationCreateBoard } from "../mutations/useMutationCreateBoard";
import type { Iform } from "../../../units/board/write/BoardWrite.types";
import { useMutationUpdateBoard } from "../mutations/useMutationUpdateBoard";
import { useState } from "react";
import type { ChangeEvent } from "react";
import _ from "lodash";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";
import { useMutationUploadFile } from "../mutations/useMutationUploadFile";
import type { UseFormSetValue } from "react-hook-form";
// useBoard의 타입
interface useBoardArgs {
  boardId?: string;
  setValue?: UseFormSetValue<Iform> | undefined;
  files?: File[];
  imageUrls?: string[];
}

// deleteBoard의 prev 타입
interface IPrev {
  __ref: string;
}

// update할때 사용할 배열 데이터의 타입
interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export const useBoard = (args: useBoardArgs) => {
  const uploadImages: string[] = []; // 이미지 업데이트에 필요한 배열 선언
  const router = useRouter();
  const [password, setPassword] = useState(""); // 비밀번호 state

  const [uploadFile] = useMutationUploadFile(); // 이미지 업로드 함수 가져오기
  const [createBoard] = useMutationCreateBoard(); // 게시글 등록 함수 가져오기
  const [updateBoard] = useMutationUpdateBoard(); // 게시글 수정 함수 가져오기
  const [deleteBoard] = useMutationDeleteBoard(); // 게시글 삭제 함수 가져오기

  /** 0.5초 뒤에 value 값을 읽어와서 password state에 담는 함수 */
  const getDebounce = _.debounce((value: string) => {
    setPassword(value);
  }, 500);

  /** change 이벤트가 발생하면 getDebounce를 실행시킨다 */
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  /** 게시글 등록 버튼을 누르면 실행되는 함수
   *  data는 게시글 등록 페이지에서 setValue, register를 통해 전송받는다.
   */
  const onClickWrite = async (data: Iform): Promise<void> => {
    if (!args.files || !args.setValue || !data.boardAddress) return;
    // setValue를 인자로 받아서 useForm의 images에 값을 넣어준다
    args.setValue("images", args.files);
    // 만약 images가 없다면 그냥 빈 배열을 할당해준다
    if (!data.images) data.images = ["", "", ""];

    const results = await Promise.all(
      // data.images(setValue된 값)을 map으로 순회시켜 이미지 파일이 있을때만 upload한다
      data.images
        .filter((el) => el)
        .map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    // 이미지 업로드한 결과를 저장
    const resultUrls = results.map((el) => el.data?.uploadFile.url ?? "");
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
            boardAddress: {
              // address는 객체 형태로 데이터를 받음
              zipcode: data.boardAddress.zipcode,
              address: data.boardAddress.address,
              addressDetail: data.boardAddress.zipcode,
            },
            images: resultUrls,
          },
        },
        // api 요청이 날아간 후에 캐시를 직접 수정해서 데이터를 업데이트 해준다.
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: () => {
                return [data?.createBoard];
              },
            },
          });
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
  };

  const onClickDelete = async (): Promise<void> => {
    if (!args.boardId) return;
    try {
      await deleteBoard({
        variables: { boardId: args.boardId },
        // api 요청이 날아가면 캐시 수정을 통해 삭제하고 값을 업데이트 해준다.
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev, { readField }) => {
                const deletedId = data?.deleteBoard;
                const filteredPrev = prev.filter(
                  (el: IPrev) => readField("_id", el) !== deletedId
                );
                return [...filteredPrev];
              },
            },
          });
        },
      });
      void router.push("/boards");
      Modal.success({ content: "게시글을 삭제했습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  /** 수정하기 버튼 클릭 함수 */
  const onClickEdit = async (data: Iform): Promise<void> => {
    if (!args.files || !args.setValue || !data.images) return;
    if (!data.boardAddress) return;
    if (!router || typeof router.query.boardId !== "string") return;
    // files로 들어온 이미지를 useForm images에 넣어준다.
    args.setValue("images", args.files);

    // imageUrl에 codecamp 문자열이 들어있으면 미리 만들어놓은 uploadImage에 넣어준다.
    args.imageUrls?.forEach((el, index) => {
      if (el.includes("codecamp")) uploadImages[index] = el;
    });

    // files에 들어온 이미지들을 업로드 한다.
    const results = await Promise.all(
      args.files
        .filter((el) => el)
        .map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    const resultUpload = results.map((el) => el.data?.uploadFile.url ?? "");

    let newIndex = 0; // 새 배열의 인덱스

    // uploadImage의 배열 길이 까지 반복
    for (let i = 0; i < uploadImages.length; i++) {
      // uploadImage 배열이 빈 값이거나 newIndex의 값이 업로드한 이미지 개수보다 적으면 실행
      if (uploadImages[i] === undefined && newIndex < resultUpload.length) {
        // uploadImage에 값이 있으면 실행 x 값이 없다면 업로드한 이미지를 배열에 넣어줌
        uploadImages[i] = resultUpload[newIndex];
        newIndex++;
      }
    }
    // 반복문이 끝난 이후에도 resultUpload가 newIndex보다 작으면 아직 이미지가 남아있으므로
    // 남은 이미지는 push해준다
    while (newIndex < resultUpload.length) {
      uploadImages.push(resultUpload[newIndex]);
      newIndex++;
    }

    // updateBoardInput 형식으로 데이터를 받기때문에 수정할 데이터 객체를 하나 생성함.
    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title) updateBoardInput.title = data.title;
    if (data.contents) updateBoardInput.contents = data.contents;
    if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
    // 주소에 들어갈 항목이 다 있으면 address객체 생성해서 데이터 넣어줌
    if (
      data.boardAddress.zipcode &&
      data.boardAddress.address &&
      data.boardAddress.addressDetail
    ) {
      updateBoardInput.boardAddress = {};
      if (data.boardAddress.zipcode)
        updateBoardInput.boardAddress.zipcode = data.boardAddress.zipcode;
      if (data.boardAddress.address)
        updateBoardInput.boardAddress.address = data.boardAddress.address;
      if (data.boardAddress.addressDetail)
        updateBoardInput.boardAddress.addressDetail =
          data.boardAddress.addressDetail;
    }
    if (resultUpload) updateBoardInput.images = uploadImages;

    try {
      const updateResult = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
        // 데이터를 업데이트하면 다시 fetch 요청을 보내서 데이터를 업데이트 해준다
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
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
  return {
    onClickDelete,
    onClickWrite,
    onClickEdit,
    onChangePassword,
  };
};
