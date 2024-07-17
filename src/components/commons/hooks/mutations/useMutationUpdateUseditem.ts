import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";

// 상품 수정 API
export const UPDATE_USEDITEM = gql`
  mutation ($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(
      useditemId: $useditemId
      updateUseditemInput: $updateUseditemInput
    ) {
      _id
    }
  }
`;

/** 상품 수정 hooks (함수) */
export const useMutationUpdateUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  return mutation;
};
