import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { IMutation, IMutationDeleteBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardDetail():JSX.Element{

  const router = useRouter()
  if(!router || typeof router.query.boardId !== "string") return <></>
  // router가 없거나 router.query.boardId가 string이 아니면 <></>을 리턴해줘라.
  // 이 부분이 없으면 typescript에서 만약 boardId가 string이 아닌 경우 처리를 위해 명확하게 구분해줌.

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD,{
    variables: { boardId: router.query.boardId }
  });
  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(DELETE_BOARD);
  
  const MoveToList = () =>{
    router.push("./")
  }
  
  const MoveToEdit = () =>{
    router.push(`${router.asPath}/edit`)
  }
  const onClickDelete = async() => {
    try{
      if(!router || typeof router.query.boardId !== "string") return <></>

      await deleteBoard({
        variables:{
          boardId: router.query.boardId
        }
      })
      alert("삭제했습니다")
      router.push("/boards")
    }catch(error){
      if(error instanceof Error) alert(error.message)
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