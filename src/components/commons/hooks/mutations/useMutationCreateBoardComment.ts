import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

// 댓글 등록 mutation
export const CREATE_BOARD_COMMENTS = gql`
  mutation createBoardComment(
    $boardId: ID!
    $createBoardCommentInput: CreateBoardCommentInput!
  ) {
    createBoardComment(
      boardId: $boardId
      createBoardCommentInput: $createBoardCommentInput
    ) {
      _id
    }
  }
`;
/** 댓글 등록 hooks(함수) */
export const useMutationCreateBoardComment = () => {
  const mutation = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENTS);

  return mutation;
};
