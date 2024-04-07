import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_BOARD_COMMENTS,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import type { MouseEvent, ChangeEvent } from "react";
import { useState } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();
  const [boardCommentId, setBoardCommentId] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(
    FETCH_BOARD_COMMENTS,
    typeof router.query.boardId === "string"
      ? { variables: { boardId: router.query.boardId } }
      : { skip: true }
  );
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENTS);

  const onClickCommentDelete = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      ModalToggle(); // 모달창 꺼주기
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  /** 토글이 여러번 사용되서 그냥 함수로 만들어 한번에 사용 */
  const ModalToggle = (): void => {
    setOpenDeleteModal((prev) => !prev);
  };
  /** 댓글의 삭제 아이콘을 클릭하면 함수 호출
   *  토글로 인해 open modal값이 true로 바뀌면서 모달창 나타남.
   *  댓글 클릭시 id에 el_id를 보내고있기 때문에 그 값을 boardId에 다시 넣어주기 위해 state생성
   */
  const onClickDeleteModal = (e: MouseEvent<HTMLImageElement>): void => {
    ModalToggle();
    setBoardCommentId(e.currentTarget.id);
  };
  /** 모달에서 비밀번호 입력하는값을 password에 넣어서 비밀번호와 동일한지 확인 */
  const onChangeModalPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <BoardCommentListUI
      data={data}
      openDeleteModal={openDeleteModal}
      ModalToggle={ModalToggle}
      onClickCommentDelete={onClickCommentDelete}
      onClickDeleteModal={onClickDeleteModal}
      onChangeModalPassword={onChangeModalPassword}
    />
  );
}
