import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

// 좋아요 API
export const LIKE_BOARD = gql`
  mutation ($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
// 게시글 좋아요 hooks (함수)
export const useMutationLikeBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  return mutation;
};
