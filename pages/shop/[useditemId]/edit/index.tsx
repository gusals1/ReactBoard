import { gql, useQuery } from "@apollo/client";

import { useRouter } from "next/router";
import type {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.index";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/components/commons/store";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      images
    }
  }
`;

export default function ProductEdit(): JSX.Element {
  const router = useRouter();
  /*  fetchBoard를 여기서 하는 이유
      write와 edit는 하나의 컴포넌트에서 분기되는데 그럼 write할때도 fetch요청이 들어가 낭비가 발생함
      --> router.asPath를 이용해서 조건문으로 감지하면 writer페이지에서 편하게 보게 할 수 있을지도?
  */
  if (!router || typeof router.query.useditemId !== "string") return <></>;
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <ProductWrite data={data} />;
}
