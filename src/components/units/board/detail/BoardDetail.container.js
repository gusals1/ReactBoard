import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";

export default function BoardDetail(){

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD,{
    variables: { boardId: router.query.boardId }
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  
  const MoveToList = () =>{
    router.push("./")
  }
  
  const MoveToEdit = () =>{
    router.push(`${router.asPath}/edit`)
  }
  const onClickDelete = async() => {
    try{
      await deleteBoard({
        variables:{
          boardId: router.query.boardId
        }
      })
      alert("삭제했습니다")
      router.push("/boards")
    }catch(error){
      alert(error.message)
    }
    
  }

  return (
    <BoardDetailUI
      data = {data}
      MoveToEdit={MoveToEdit}
      MoveToList={MoveToList}
      onClickDelete = {onClickDelete}
    />
  )
}