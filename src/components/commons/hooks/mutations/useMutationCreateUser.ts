import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";

// 회원가입 mutation
export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

/** 회원가입 hooks (함수) */
export const useMutationCreateuser = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  return mutation;
};
