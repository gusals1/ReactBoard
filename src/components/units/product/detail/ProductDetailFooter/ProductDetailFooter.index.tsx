import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import * as S from "./ProductDetailFooter.styles";

export default function ProductDetailFooter() {
  const { onClickMoveToPage } = useMoveToPage();
  const { id } = useCheckedId("useditemId");

  return (
    <>
      <S.UnderLine />
      <S.BottomWrapper>
        <S.Button onClick={onClickMoveToPage("/shop")}>목록으로</S.Button>
        <S.Button onClick={onClickMoveToPage(`/shop/${id}/edit`)}>
          수정하기
        </S.Button>
        <S.Button onClick={onClickMoveToPage(`/shop`)}>구매하기</S.Button>
      </S.BottomWrapper>
      <S.UnderLine />
    </>
  );
}
