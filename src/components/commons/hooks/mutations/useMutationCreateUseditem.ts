import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";

// 상품 등록 mutation
export const CREATE_USEDITEM = gql`
  mutation ($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;
/** 상품 등록 hooks (함수) */
export const useMutationCreateUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  return mutation;
};
