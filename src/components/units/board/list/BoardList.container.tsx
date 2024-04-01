import { useQuery } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"
import {useRouter} from "next/router"
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react"
export default function BoardListPage(){
  
  const router = useRouter()
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickNew = () => {
    router.push("boards/new")

  }
  const onClickDetail = (event:MouseEvent<HTMLDivElement>) => {
    if(event.target instanceof HTMLDivElement)
    router.push(`/boards/${event.currentTarget.id}`)
  }
  
  return(
    <BoardListUI
      data = {data}
      onClickNew = {onClickNew}
      onClickDetail = {onClickDetail}
    />
  )
}