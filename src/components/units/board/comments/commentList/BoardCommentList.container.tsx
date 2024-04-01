import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD_COMMENTS, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { MouseEvent } from "react";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../../../commons/types/generated/types";

export default function BoardCommentList(){

  const router = useRouter();
  if(!router || typeof router.query.boardId !== "string") return <></>
  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS,{
    variables:{
      boardId : router.query.boardId
    }
  })
  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENTS);

  const onClickCommentDelete = async(e:MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력하세요");

    await deleteBoardComment({
      variables: {
        password,
        boardCommentId: e.currentTarget.id
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