import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_BOARD_COMMENTS,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import type { MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardCommentList(): JSX.Element {
  const router = useRouter();

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
    e: MouseEvent<HTMLImageElement>
  ): Promise<void> => {
    const password = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: e.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickCommentDelete={onClickCommentDelete}
    />
  );
}
