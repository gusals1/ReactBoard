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
  const router = useRouter();

  // 원래대로 router.query.boardId가 string이 아니면 <></>을 반환했는데 오류가 생겨서 Query문 안에 조건문을 넣어줬다.
  // 버젼때문에 생기는 오류일수도 있다고 한다.
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    typeof router.query.boardId === "string"
      ? { variables: { boardId: router.query.boardId } }
      : { skip: true }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const MoveToList = (): void => {
    void router.push("./");
  };

  const MoveToEdit = (): void => {
    void router.push(`${router.asPath}/edit`);
  };
  const onClickDelete = async (): Promise<void> => {
    try {
      if (typeof router.query.boardId !== "string") return;
      await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      Modal.success({ content: "게시글을 삭제했습니다" });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

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
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

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
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
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
