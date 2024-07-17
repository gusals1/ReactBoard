import { gql, useMutation } from "@apollo/client";
import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useMoveToPage } from "../../../../commons/hooks/customs/useMoveToPage";
import { useProduct } from "../../../../commons/hooks/customs/useProduct";
import * as S from "./ProductDetailFooter.styles";
import type {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from "../../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

// 포인트로 상품 구매하는 API문
export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      price
    }
  }
`;

export default function ProductDetailFooter(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const { id } = useCheckedId("useditemId");

  const { onClickDeleteItem } = useProduct({ useditemId: id });
  // 상품 구매 API useMutation으로 사용
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const onClickBuy = async () => {
    // 상품 구매할때 id값을 주고 성공 실패에 따라 Modal 띄워주기
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: id,
        },
      });

      Modal.success({ content: "구매했습니다" });
      void router.push("/shop");
    } catch (error) {
      Modal.error({ content: "오류가 발생했습니다" });
    }
  };
  return (
    <>
      <S.UnderLine />
      <S.BottomWrapper>
        <S.Button onClick={onClickMoveToPage("/shop")}>목록으로</S.Button>
        <S.Button onClick={onClickMoveToPage(`/shop/${id}/edit`)}>
          수정하기
        </S.Button>

        {/* 기능은 만들어졌지만 권한이 없다고 하면서 기능이 동작하지 않음 뭐가 필요한지 몰?루? */}
        <S.Button onClick={onClickDeleteItem}>물품 삭제</S.Button>
      </S.BottomWrapper>
      <S.BuyButton onClick={onClickBuy}>구매하기</S.BuyButton>
      <S.UnderLine />
    </>
  );
}
