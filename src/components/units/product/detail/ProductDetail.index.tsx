import { useCheckedId } from "../../../commons/hooks/customs/useCheckedId";
import styled from "@emotion/styled";
import ProductDetailFooter from "./ProductDetailFooter/ProductDetailFooter.index";
import ProductDetailBody from "./ProductDetailBody/ProductDetailBody.index";
import ProductDetailHeader from "./ProductDetailHeader/ProductDetailHeader.index";
import { useQueryFetchUsedItem } from "../../../commons/hooks/queries/useQueryFetchUsedItem";

export default function ProductDetail(): JSX.Element {
  const Wrapper = styled.div`
    max-width: 1200px;
    margin: 100px auto 0;
    padding: 80px 102px;
  `;

  const { id } = useCheckedId("useditemId");
  // 상품 상세 조회 API
  const { data } = useQueryFetchUsedItem({ useditemId: id });

  return (
    <>
      <Wrapper>
        <ProductDetailHeader data={data} />
        <ProductDetailBody data={data} />
        <ProductDetailFooter />
      </Wrapper>
    </>
  );
}
