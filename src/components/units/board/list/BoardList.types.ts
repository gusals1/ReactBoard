import { MouseEvent } from "react"
import { IQuery } from "../../../../commons/types/generated/types"

export interface IBoardListUIProps{
  onClickNew: ()=> void
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void
  data?: Pick<IQuery, "fetchBoards">
}