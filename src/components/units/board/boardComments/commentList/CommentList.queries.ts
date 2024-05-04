import { gql } from "@apollo/client";

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
export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;
// delete board는 return값으로 받을수 있는 값이 ID하나밖에 없어서 {}안에 return을 입력할 필요가없다.
// graph ql은 delete시에 return 값이 하나면 생략한다.
