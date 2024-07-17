import InfiniteScroll from "react-infinite-scroller";
import CommentListItem from "./CommentList.Item";
import { useQueryFetchBoardComment } from "../../../../commons/hooks/queries/useQueryFetchBoardComment";
import CommentWrite from "../commentWrite/CommentWrite.index";

interface ICommentListProps {
  id: string; // 댓글 달리는 게시글의 id값
}
export default function CommentList(props: ICommentListProps): JSX.Element {
  // 무한스크롤 적용
  // fetchMore => 데이터를 추가로 fetch 해올때 사용
  const { data, fetchMore } = useQueryFetchBoardComment({ boardId: props.id });

  /** 무한 스크롤시에 호출하는 함수 (댓글을 추가로 가져오는 역할을 함) */
  const FetchMoreComment = (): void => {
    // 추가 패치할때 현재 페이지의 +1을 page에 넣음
    void fetchMore({
      variables: {
        // 댓글도 10개 단위로 끊어서 보여주기 때문에 전체 댓글을 10으로 나눠서 1을 더한값으로 지정
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      // update할때는 이전값(prev), 추가fetch 결과값(fetchMore result)를 인자로 받음
      updateQuery: (prev, { fetchMoreResult }) => {
        // 추가 패치한 내용에 댓글이 없으면 이전값만 보여줌
        if (fetchMoreResult?.fetchBoardComments === undefined) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        }
        // 추가 패치될 댓글이 있다면 이전값에 합쳐서 보여줌
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      {/* props.id === 댓글 달리는 게시글의 id값 */}
      <CommentWrite id={props.id} />
      <InfiniteScroll pageStart={0} loadMore={FetchMoreComment} hasMore={true}>
        {data?.fetchBoardComments.map((el) => (
          <CommentListItem el={el} key={el._id} id={props.id} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
