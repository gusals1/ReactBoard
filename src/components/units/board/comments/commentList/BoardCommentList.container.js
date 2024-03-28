import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD_COMMENTS, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentList(){

  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS,{
    variables:{
      boardId : router.query.boardId
    }
  })
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENTS);

  const onClickCommentDelete = async(e) => {
    const password = prompt("비밀번호를 입력하세요");

    await deleteBoardComment({
      variables: {
        password,
        boardCommentId: e.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  }

  return(
    <BoardCommentListUI
      data = {data}
      onClickCommentDelete ={onClickCommentDelete}
    />
  )
}