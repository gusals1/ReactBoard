import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";

// 게시글 등록 mutation
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

/** 게시글 등록 hooks (함수) */
export const useMutationCreateBoard = () => {
  const mutation = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  return mutation;
};
