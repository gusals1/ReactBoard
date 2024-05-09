import _ from "lodash";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

export interface IUseSearchBarProps {
  refetchBoardCount: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;

  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export const useSearch = (args: IUseSearchBarProps) => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ page: 1, search: value });
    void args.refetchBoardCount({ search: value });

    setKeyword(value);
  }, 500);

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return { keyword, onChangeSearchBar };
};
