import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";

export default function BoardCommentList(): JSX.Element {
  // 댓글 목록 페이지
  const router = useRouter();
  if (typeof router.query.boardId !== "string") return <></>;

  // 댓글 조회 query, fetchMore로 추가로 fetch 할 수 있게함.
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { variables: { boardId: router.query.boardId } });

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

  return <CommentListUI data={data} FetchMoreComment={FetchMoreComment} />;
}
