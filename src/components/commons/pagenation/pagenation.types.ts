import type { ApolloQueryResult } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IPagenation01Props {
  count: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPagenationUIProps {
  page: number;
  lastPage: number;
  activeNum: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPageMove: (event: MouseEvent<HTMLParagraphElement>) => void;
}
