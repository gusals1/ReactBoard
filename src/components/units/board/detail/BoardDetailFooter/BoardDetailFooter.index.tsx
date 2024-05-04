import { useBoard } from "../../../../commons/hooks/customs/useBoard";
import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./BoardDetailFooter.styles";

export default function BoardDetailFooter() {
  const { id } = useCheckedId("boardId");
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDelete } = useBoard({ boardId: id });

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
