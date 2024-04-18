import BoardDetailUI from "./BoardDetail.presenter";
import { useRouter } from "next/router";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardDetail(): JSX.Element {
  // 게시글 상세 페이지
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    // boardId의 값이 string이면 주소값으로 fetch하고 아니면 skip한다
    // boardId가 없을수도 있다는 오류가 생겨 조건입력
    typeof router.query.boardId === "string"
      ? { variables: { boardId: router.query.boardId } }
      : { skip: true }
  );

  // 삭제 mutation
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  // 게시글 좋아요 mutation
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  // 게시글 싫어요 mutation
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  /** 게시글 목록 페이지 이동 */
  const MoveToList = (): void => {
    void router.push("./");
  };
  /** 게시글 수정 페이지 이동 */
  const MoveToEdit = (): void => {
    void router.push(`${router.asPath}/edit`);
  };

  /** 게시글 삭제 함수 boardId 필요 */
  const onClickDelete = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") return;

      await deleteBoard({ variables: { boardId: router.query.boardId } });

      Modal.success({ content: "게시글을 삭제했습니다" });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  /** 좋아요 클릭 함수
   * boardId의 좋아요를 증가시키고 refetch를 통해 화면에 바로 보여줌
   */
  const onClickCountUp = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") return;
      await likeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  /** 싫어요 클릭 함수
   * boardId의 싫어요를 증가시키고 refetch를 통해 화면에 바로 보여줌
   */
  const onClickCountDown = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") return;
      await dislikeBoard({
        variables: { boardId: router.query.boardId },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <BoardDetailUI
      data={data}
      MoveToEdit={MoveToEdit}
      MoveToList={MoveToList}
      onClickDelete={onClickDelete}
      onClickCountUp={onClickCountUp}
      onClickCountDown={onClickCountDown}
    />
  );
}
