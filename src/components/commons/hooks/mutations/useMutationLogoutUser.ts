import { gql, useMutation } from "@apollo/client";

import type { IMutation } from "../../../../commons/types/generated/types";

// 로그아웃 API
const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

/** 로그아웃 hooks (함수) */
export const useMutationLogoutUser = () => {
  const mutation = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  return mutation;
};
