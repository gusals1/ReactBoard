import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteUseditemArgs,
} from "../../../../commons/types/generated/types";

// 상품 삭제 API
export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

/** 상품 삭제 hooks (함수) */
export const useMutationDeleteUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  return mutation;
};
