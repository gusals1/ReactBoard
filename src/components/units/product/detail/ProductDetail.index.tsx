import { useCheckedId } from "../../../commons/hooks/customs/useCheckedId";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailFooter from "./ProductDetailFooter/ProductDetailFooter.index";
import ProductDetailBody from "./ProductDetailBody/ProductDetailBody.index";
import ProductDetailHeader from "./ProductDetailHeader/ProductDetailHeader.index";
import { useRouter } from "next/router";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      images
      pickedCount
    }
  }
`;

export default function ProductDetail(): JSX.Element {
  const router = useRouter();
  console.log(router.query.useditemId);
  const Wrapper = styled.div`
    max-width: 1200px;
    margin: 100px auto 0;
    padding: 80px 102px;
  `;

  const { id } = useCheckedId("useditemId");

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: id },
  });

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
