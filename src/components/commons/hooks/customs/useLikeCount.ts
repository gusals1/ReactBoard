import { gql, useQuery } from "@apollo/client";
import { useMutationDislikeBoard } from "../mutations/useMutationDislikeBoard";
import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
// import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

interface IUseLikeCountArgs {
  boardId: string;
}
// 좋아요 싫어요만 조회하는 fetchBoard API
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
      dislikeCount
    }
  }
`;

export const useLikeCount = (args: IUseLikeCountArgs) => {
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDislikeBoard();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: args.boardId } }
  );
  /** 좋아요 클릭 함수
   * boardId의 좋아요를 증가시키고 refetch를 통해 화면에 바로 보여줌
   */
  const onClickLike = async (): Promise<void> => {
    await likeBoard({
      variables: { boardId: args.boardId },
      optimisticResponse: {
        // 옵티미스틱 UI를 통해 API 요청보다 먼저 값을 업데이트 해준다.
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data: BoardData }) => {
        cache.writeQuery({
          query: FETCH_BOARD, // 캐시 수정시에 fetchBoard 쿼리를 동작
          variables: { boardId: args.boardId },
          data: {
            fetchBoard: {
              _id: args.boardId,
              __typename: "Board",
              likeCount: BoardData?.likeBoard, // 좋아요 개수는
              dislikeCount: data?.fetchBoard.dislikeCount,
            },
          },
        });
      },
    });
  };
  /** 싫어요 클릭 함수
   * boardId의 싫어요를 증가시키고 refetch를 통해 화면에 바로 보여줌
   */
  const onClickDislike = async (): Promise<void> => {
    await dislikeBoard({
      variables: { boardId: args.boardId },
      optimisticResponse: {
        dislikeBoard: (data?.fetchBoard.dislikeCount ?? 0) + 1,
      },
      update: (cache, { data: BoardData }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
          data: {
            fetchBoard: {
              _id: args.boardId,
              __typename: "Board",
              dislikeCount: BoardData?.dislikeBoard,
              likeCount: data?.fetchBoard.likeCount,
            },
          },
        });
      },
    });
  };

  return { onClickLike, onClickDislike };
};
