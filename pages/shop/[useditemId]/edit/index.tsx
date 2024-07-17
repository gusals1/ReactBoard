import { useRouter } from "next/router";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.index";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/components/commons/store";
import { useQueryFetchUsedItem } from "../../../../src/components/commons/hooks/queries/useQueryFetchUsedItem";

export default function ProductEdit(): JSX.Element {
  const router = useRouter();

  if (!router || typeof router.query.useditemId !== "string") return <></>;
  const { data } = useQueryFetchUsedItem({
    useditemId: router.query.useditemId,
  });

  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <ProductWrite data={data} />;
}
