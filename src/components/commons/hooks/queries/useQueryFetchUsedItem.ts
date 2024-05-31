import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      prpice
      tags
      createdAt
      images
      pickedCount
    }
  }
`;

export const useQueryFetchUsedItem = () => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM);

  return result;
};
