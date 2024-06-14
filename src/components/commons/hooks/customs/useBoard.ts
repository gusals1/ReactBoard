import { Modal } from "antd";
import { useMutationDeleteBoard } from "../mutations/useMutationDeleteBoard";
import { useRouter } from "next/router";
import { useMutationCreateBoard } from "../mutations/useMutationCreateBoard";
import type { Iform } from "../../../units/board/write/BoardWrite.types";
import { useMutationUpdateBoard } from "../mutations/useMutationUpdateBoard";
import { useState } from "react";
import type { ChangeEvent } from "react";
// import { useMutationUploadFile } from "../mutations/useMutationUploadFile";
import _ from "lodash";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

interface useBoardArgs {
  boardId?: string;
}
interface IPrev {
  __ref: string;
}
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
  const router = useRouter();
  const [password, setPassword] = useState("");

  // const [uploadFile] = useMutationUploadFile();
  const [createBoard] = useMutationCreateBoard();
  const [updateBoard] = useMutationUpdateBoard();
  const [deleteBoard] = useMutationDeleteBoard();

  const getDebounce = _.debounce((value: string) => {
    setPassword(value);
  }, 500);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  const onClickWrite = async (data: Iform): Promise<void> => {
    if (!data.boardAddress) return;

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
            images: data.images,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                return [data?.createBoard, ...prev];
              },
            },
          });
        },
      });

      console.log("useBoard", data);
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
  const onClickEdit = async (data: any): Promise<void> => {
    if (!router || typeof router.query.boardId !== "string") return;

    // updateBoardInput 형식으로 데이터를 받기때문에 수정할 데이터 객체를 하나 생성함.
    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title) updateBoardInput.title = data.title;
    if (data.contents) updateBoardInput.contents = data.contents;
    if (data.youtubeUrl) updateBoardInput.youtubeUrl = data.youtubeUrl;
    // 주소에 들어갈 항목이 다 있으면 address객체 생성해서 데이터 넣어줌
    if (data.zipcode && data.address && data.addressDetail) {
      updateBoardInput.boardAddress = {};
      if (data.zipcode) updateBoardInput.boardAddress.zipcode = data.zipcode;
      if (data.address) updateBoardInput.boardAddress.address = data.address;
      if (data.addressDetail)
        updateBoardInput.boardAddress.addressDetail = data.addressDetail;
    }
    if (data.images) updateBoardInput.images = data.images;
    try {
      const updateResult = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
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
