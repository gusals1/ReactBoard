import InfiniteScroll from "react-infinite-scroller";
import type { ICommentListUIProps } from "./CommentList.types";
import CommentListItem from "./CommentList.Item";

export default function CommentListUI(props: ICommentListUIProps): JSX.Element {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.FetchMoreComment}
      hasMore={true}
    >
      {props.data?.fetchBoardComments.map((el) => (
        <CommentListItem el={el} key={el._id} />
      )) ?? <></>}
    </InfiniteScroll>
  );
}
