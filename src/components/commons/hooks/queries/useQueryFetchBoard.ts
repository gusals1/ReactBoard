import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

// 게시글 조회
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

/** 게시글 조회 함수  boardId를 받아야함. */
export const useQueryFetchBoard = (boardId: IQueryFetchBoardArgs) => {
  const result = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: boardId }
  );
  return result;
};
