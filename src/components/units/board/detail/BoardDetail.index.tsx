import { useQueryFetchBoard } from "../../../commons/hooks/queries/useQueryFetchBoard";
import BoardDetailHeader from "./BoardDetailHeader/BoardDetailHeader.index";
import BoardDetailBody from "./BoardDetailBody/BoardDetailBody.index";
import { useCheckedId } from "../../../commons/hooks/customs/useCheckedId";
import BoardDetailFooter from "./BoardDetailFooter/BoardDetailFooter.index";
import styled from "@emotion/styled";
import CommentList from "../boardComments/commentList/CommentList.index";

export default function BoardDetail(): JSX.Element {
  const Wrapper = styled.div`
    max-width: 1200px;
    margin: 100px auto 0;
    padding: 80px 102px;
    box-shadow: 0px 0px 10px gray;
  `;

  const { id } = useCheckedId("boardId"); // router.query의 boardId 값을 읽어옴
  const { data } = useQueryFetchBoard({ boardId: id }); // 상세 보기를 위해 fetch

  return (
    <>
      <Wrapper>
        <BoardDetailHeader data={data} />
        <BoardDetailBody data={data} />
      </Wrapper>
      <BoardDetailFooter />
      {/* 댓글에 id를 props로 넘기는 이유 => 댓글 컴포넌트에서 id를 조회하다보니 새로고침하거나
          페이지 들어갈때 댓글이 있는데 조회가 안되는 오류가 발생해서 상세 페이지 접속시 id값을 전달해줌
      */}
      <CommentList id={id} />
    </>
  );
}
