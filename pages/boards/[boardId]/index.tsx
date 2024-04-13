import BoardCommentList from "../../../src/components/units/board/comments/commentList/CommentList.container";
import BoardCommentWrite from "../../../src/components/units/board/comments/commentWrite/CommentWrite.container";
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
