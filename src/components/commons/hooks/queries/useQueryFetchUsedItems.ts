import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

// isSoldout: $isSoldout
export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean) {
    fetchUseditems(page: 1, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      seller {
        name
      }
    }
  }
`;
export interface Args {
  isSoldout: boolean;
}
export const useQueryFetchUsedItems = (args: Args) => {
  const result = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { variables: { isSoldout: args.isSoldout } });

  return result;
};
