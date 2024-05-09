import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDislikeBoardArgs,
} from "../../../../commons/types/generated/types";

// 싫어요 mutation
export const DISLIKE_BOARD = gql`
  mutation ($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const useMutationDislikeBoard = () => {
  // 게시글 싫어요 mutation
  const mutation = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  return mutation;
};
