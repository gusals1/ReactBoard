// fetchBoardCount 쿼리를 data에 저장 fetchBoards의 결과도 data에 저장되니 dataBoardCount라는 이름으로 변경

import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

// 게시글 개수 조회
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;

// fetchBoardCount - 게시글 개수를 저장하고 있는 데이터
export const useQueryFetchBoardsCount = () => {
  const result = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  return result;
};
