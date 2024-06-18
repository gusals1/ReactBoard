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

  const { id } = useCheckedId("boardId");
  const { data } = useQueryFetchBoard({ boardId: id });

  return (
    <>
      <Wrapper>
        <BoardDetailHeader data={data} />
        <BoardDetailBody data={data} />
      </Wrapper>
      <BoardDetailFooter />
      <CommentList />
    </>
  );
}
