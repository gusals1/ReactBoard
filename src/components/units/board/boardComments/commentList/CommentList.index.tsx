import InfiniteScroll from "react-infinite-scroller";
import CommentListItem from "./CommentList.Item";
import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useQueryFetchBoardComment } from "../../../../commons/hooks/queries/useQueryFetchBoardComment";
import CommentWrite from "../commentWrite/CommentWrite.index";

export default function CommentList(): JSX.Element {
  // 무한스크롤 적용

  const { id } = useCheckedId("boardId");

  const { data, fetchMore } = useQueryFetchBoardComment({ boardId: id });

  const FetchMoreComment = (): void => {
    // 추가 패치할때 현재 페이지의 +1을 page에 넣음
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
      },
      // update할때는 이전값, 추가fetch 결과값을 인자로 받음
      updateQuery: (prev, { fetchMoreResult }) => {
        // 추가 패치한 내용이 없으면 이전값을 그대로 넣어줌.
        if (fetchMoreResult?.fetchBoardComments === undefined)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        // 추가 패치한 내용과 이전 내용을 합쳐서 return함
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
      <CommentWrite />
      <InfiniteScroll pageStart={0} loadMore={FetchMoreComment} hasMore={true}>
        {data?.fetchBoardComments.map((el) => (
          <CommentListItem el={el} key={el._id} />
        )) ?? <></>}
      </InfiniteScroll>
    </>
  );
}
