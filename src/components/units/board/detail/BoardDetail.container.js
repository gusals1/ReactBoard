import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery } from "@apollo/client";

export default function BoardDetail(){

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD,{
    variables: { boardId: router.query.boardId }
  });
  
  const MoveToList = () =>{
    
    router.push("./")
  }
  
  const MoveToEdit = () =>{
    // console.log(router.asPath)
    router.push(`${router.asPath}/edit`)
  }

  return (
    <BoardDetailUI
      data = {data}
      MoveToEdit={MoveToEdit}
      MoveToList={MoveToList}
    />
  )
}