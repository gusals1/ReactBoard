import _ from "lodash";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { ApolloQueryResult } from "@apollo/client";

// 검색하면 검색어에 맞는 결과를 refetch하고 검색어가 있는 게시물만 검색하기 때문에 페이지로 refetch해야한다.
// 그래서 useSearch의 args에는 refetchBoardCount와 refetch를 받는다.
export interface IUseSearchBarProps {
  refetchBoardCount?: (
    variables?: Partial<IQueryFetchBoardsCountArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;

  refetch?: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export const useSearch = (args: IUseSearchBarProps) => {
  // 검색할 키워드 저장하는 state
  const [keyword, setKeyword] = useState("");

  // lodash의 debounce란? => n초 뒤에 한번 실행
  const getDebounce = _.debounce((value: string) => {
    if (typeof args.refetch === "undefined") return;
    if (typeof args.refetchBoardCount === "undefined") return;

    // onChangeSearchBar 에서 change 이벤트로 value가 들어오면 그 값을 통해서 refetch를 한다.
    void args.refetch({ page: 1, search: value });
    void args.refetchBoardCount({ search: value });

    setKeyword(value);
  }, 500);

  /** onChange 이벤트가 발생하면 getDebounce를 실행 시킨다 */
  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return { keyword, onChangeSearchBar };
};
