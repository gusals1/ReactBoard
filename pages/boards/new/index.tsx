import { useRecoilState } from "recoil";
import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.index";
import { isEditState } from "../../../src/components/commons/store";
import { useEffect } from "react";

export default function BoardNewPage(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(false);
  }, []);

  useAuth();
  return <BoardWrite />;
}
