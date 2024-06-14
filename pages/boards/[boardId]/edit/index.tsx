import { gql, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.index";
import { isEditState } from "../../../../src/components/commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function BoardEdit(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  }, []);

  const router = useRouter();
  /*  fetchBoard를 여기서 하는 이유
      write와 edit는 하나의 컴포넌트에서 분기되는데 그럼 write할때도 fetch요청이 들어가 낭비가 발생함
      --> router.asPath를 이용해서 조건문으로 감지하면 writer페이지에서 편하게 보게 할 수 있을지도?
  */
  if (!router || typeof router.query.boardId !== "string") return <></>;
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: router.query.boardId } }
  );

  return <BoardWrite data={data} />;
}
