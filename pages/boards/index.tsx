import BoardList from "../../src/components/units/board/list/BoardList.index";

export default function BoardListPage(): JSX.Element {
  // 게시글 목록 페이지
  // 만약 로그인이 구현된다면 로그인 여부에 따른 권한을 따질때 이 부분에서 사용됨.
  return <BoardList />;
}
