import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENTS = gql`
  mutation createBoardComment($boardId: ID! $createBoardCommentInput: CreateBoardCommentInput!){
    createBoardComment(
      boardId: $boardId
      createBoardCommentInput: $createBoardCommentInput
    ){
      _id
    }
  }
`