import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";

// 게시글 삭제 mutation
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

/** 게시글 삭제 hooks (함수) */
export const useMutationDeleteBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  return mutation;
};
