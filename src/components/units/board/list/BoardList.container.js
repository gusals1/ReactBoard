import { useQuery } from "@apollo/client"
import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS } from "./BoardList.queries"
import {useRouter} from "next/router"

export default function BoardListPage(){
  
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS);

  const onClickNew = () => {
    router.push("boards/new")

  }
  const onClickDetail = (event) => {
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