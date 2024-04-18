import { gql } from "@apollo/client";

// 게시글 전체 목록 조회
export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
// 게시글 개수 조회
export const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
