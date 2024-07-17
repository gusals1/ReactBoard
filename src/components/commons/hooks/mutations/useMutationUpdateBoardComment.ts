import { useMutation, gql } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

// 댓글 수정 API
export const UPDATE_BOARD_COMMENT = gql`
  mutation upDateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
    }
  }
`;

/** 댓글 수정 hooks (함수) */
export const useMutationUpdateBoardComment = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  return mutation;
};
