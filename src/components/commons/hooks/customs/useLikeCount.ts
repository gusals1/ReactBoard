import { useMutationDislikeBoard } from "../mutations/useMutationDislikeBoard";
import { useMutationLikeBoard } from "../mutations/useMutationLikeBoard";
import { FETCH_BOARD } from "../queries/useQueryFetchBoard";

interface IUseLikeCountArgs {
  boardId: string;
}

export const useLikeCount = (args: IUseLikeCountArgs) => {
  const [likeBoard] = useMutationLikeBoard();
  const [dislikeBoard] = useMutationDislikeBoard();

  /** 좋아요 클릭 함수
   * boardId의 좋아요를 증가시키고 refetch를 통해 화면에 바로 보여줌
   */
  const onClickLike = async (): Promise<void> => {
    await likeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
    });
  };
  /** 싫어요 클릭 함수
   * boardId의 싫어요를 증가시키고 refetch를 통해 화면에 바로 보여줌
   */
  const onClickDislike = async (): Promise<void> => {
    await dislikeBoard({
      variables: { boardId: args.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: args.boardId },
        },
      ],
    });
  };

  return { onClickLike, onClickDislike };
};
