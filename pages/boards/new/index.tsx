import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.index";

export default function BoardNewPage(): JSX.Element {
  useAuth();
  return <BoardWrite isEdit={false} />;
}
