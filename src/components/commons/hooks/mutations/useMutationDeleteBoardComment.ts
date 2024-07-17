import { useMutation, gql } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";

// 댓글 삭제 mutation
export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;

/** 댓글 삭제 hooks (함수) */
export const useMutationDeleteBoardComment = () => {
  // 댓글 삭제 mutation
  const mutation = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  return mutation;
};
