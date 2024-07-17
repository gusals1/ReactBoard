import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";

// 로그인 API
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
/** 로그인 hooks (함수) */
export const useMutationLoginUser = () => {
  const mutation = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  return mutation;
};
