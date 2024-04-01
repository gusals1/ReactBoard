import { gql, useQuery } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      writer
      title
      contents
    }
  }
`
export default function BoardEdit(){

  const router = useRouter();
  /*  fetchBoard를 여기서 하는 이유
      boardWrite페이지에 fetchBoard하게 되면 write와 edit가 분기되는데 그럼 write할때도 fetch요청이 들어가 낭비가 발생하기 때문에
      --> 근데 router.asPath를 이용해서 조건문을 함수에 담아서 fetch요청을 할 수있게 하면 writer페이지에서 편하게 보게 할 수 있을지도?
  */
  if(!router || typeof router.query.boardId !== "string") return <></>
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD,{
    variables: {boardId: router.query.boardId}

  })

  return(
    <BoardWrite isEdit={true} data ={data}/>
  )
}