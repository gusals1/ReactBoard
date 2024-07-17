import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

// 게시글 수정 mutation
export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
    }
  }
`;

/** 게시글 수정 hooks (함수) */
export const useMutationUpdateBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  return mutation;
};
