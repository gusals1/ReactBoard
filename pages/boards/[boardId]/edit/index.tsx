import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.index";
import { isEditState } from "../../../../src/components/commons/store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useCheckedId } from "../../../../src/components/commons/hooks/customs/useCheckedId";
import { useQueryFetchBoard } from "../../../../src/components/commons/hooks/queries/useQueryFetchBoard";

export default function BoardEdit(): JSX.Element {
  // 게시글 수정 페이지

  /*  fetchBoard를 여기서 하는 이유
      write와 edit는 하나의 컴포넌트에서 분기되는데 그럼 write할때도 fetch요청이 들어가 낭비가 발생함
  */
  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  }, []);

  // 게시글 id값을 가져오는 함수
  const { id } = useCheckedId("boardId");
  // fetchBoard query를 재사용하기 위해 분리해놓은 함수
  const { data } = useQueryFetchBoard({ boardId: id });

  // boardWriter에는 fetchBoard한 결과값을 넘겨준다.
  return <BoardWrite data={data} />;
}
