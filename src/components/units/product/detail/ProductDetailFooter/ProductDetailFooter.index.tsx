import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useProduct } from "../../../../commons/hooks/customs/useProduct";
import * as S from "./ProductDetailFooter.styles";

export default function ProductDetailFooter() {
  const { onClickMoveToPage } = useMoveToPage();
  const { id } = useCheckedId("useditemId");

  const { onClickDeleteItem } = useProduct({ useditemId: id });

  return (
    <>
      <S.UnderLine />
      <S.BottomWrapper>
        <S.Button onClick={onClickMoveToPage("/shop")}>목록으로</S.Button>
        <S.Button onClick={onClickMoveToPage(`/shop/${id}/edit`)}>
          수정하기
        </S.Button>
        <S.Button onClick={onClickMoveToPage(`/shop`)}>구매하기</S.Button>
        {/* 기능은 만들어졌지만 권한이 없다고 하면서 기능이 동작하지 않음 뭐가 필요한지 몰?루? */}
        <S.Button onClick={onClickDeleteItem}>물품 삭제</S.Button>
      </S.BottomWrapper>
      <S.UnderLine />
    </>
  );
}
