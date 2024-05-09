import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

// 좋아요 mutaion
export const LIKE_BOARD = gql`
  mutation ($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export const useMutationLikeBoard = () => {
  // 게시글 좋아요 mutation
  const mutation = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return mutation;
};
