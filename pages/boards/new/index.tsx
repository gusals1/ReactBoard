import { useRecoilState } from "recoil";
import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.index";
import { isEditState } from "../../../src/components/commons/store";
import { useEffect } from "react";

export default function BoardNewPage(): JSX.Element {
  // 게시글 등록 페이지
  // 게시글 등록 페이지는 수정 페이지와 state를 통해 분기하는데 props로 넘기기에는 복잡하니 recoil state를 사용함
  // recoil state에 등록된 isEdit를 가져와서 이 페이지에 들어오면 false로 변경해준다.
  const [, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(false);
  }, []);

  // 글쓰기 페이지는 권한이 필요하기 때문에 useAuth를 실행
  useAuth();
  return <BoardWrite />;
}
