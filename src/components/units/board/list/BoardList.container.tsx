import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export default function BoardListPage(): JSX.Element {
  // 게시글 목록 페이지
  const router = useRouter();

  // fetchBoards 쿼리를 useQuery를 통해 가져오고 data안에 저장, refetch 기능도 사용할수 있게 명시(?)
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // fetchBoardCount 쿼리를 data에 저장 fetchBoards의 결과도 data에 저장되니 dataBoardCount라는 이름으로 변경
  // fetchBoardCount - 게시글 개수를 저장하고 있는 데이터
  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // pagination을 위해 마지막 페이지를 계산 값이 없다면 10, 있다면 나눈후 올림 자리수로 저장
  const lastPageNum = Math.ceil((dataBoardCount?.fetchBoardsCount ?? 10) / 10);

  /* 게시글 생성 페이지 이동 */
  const onClickNew = (): void => {
    void router.push("boards/new");
  };
  /* 게시글 상세 페이지 이동 */
  const onClickDetail = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      lastPage={lastPageNum}
      onClickNew={onClickNew}
      onClickDetail={onClickDetail}
    />
  );
}
