import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";

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

export const useMutationUpdateUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  return mutation;
};
