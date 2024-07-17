import { useBoard } from "../../../../commons/hooks/customs/useBoard";
import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./BoardDetailFooter.styles";

export default function BoardDetailFooter() {
  const { id } = useCheckedId("boardId");
  const { onClickMoveToPage } = useMoveToPage(); // 페이지 이동 함수를 가져와서 사용(hooks로 분리 시켜놓음)
  const { onClickDelete } = useBoard({ boardId: id }); // useBoard에서 삭제 api만 가져옴

  return (
    <>
      <S.BottomWrapper>
        <S.Button onClick={onClickMoveToPage("/boards")}>목록으로</S.Button>
        <S.Button onClick={onClickMoveToPage(`/boards/${id}/edit`)}>
          수정하기
        </S.Button>
        <S.Button onClick={onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </>
  );
}
