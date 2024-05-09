import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const useQueryFetchBoardComment = (
  variables: IQueryFetchBoardCommentsArgs
) => {
  // 댓글 조회 query, fetchMore로 추가로 fetch 할 수 있게함.
  const result = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { variables });

  return result;
};
