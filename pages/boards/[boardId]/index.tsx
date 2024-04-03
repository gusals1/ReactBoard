import BoardCommentList from "../../../src/components/units/board/comments/commentList/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/board/comments/commentWrite/BoardCommentWrite.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
