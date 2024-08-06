import { useRecoilState } from "recoil";
import ProductWrite from "../../../src/components/units/product/write/ProductWrite.index";
import { isEditState } from "../../../src/components/commons/store";
import { useEffect } from "react";
// import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";

export default function ProductNewPage(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(false);
  }, []);
  // useAuth();
  return <ProductWrite />;
}
