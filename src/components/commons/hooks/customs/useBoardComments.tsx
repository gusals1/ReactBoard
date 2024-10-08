import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import { useMutationDeleteBoardComment } from "../mutations/useMutationDeleteBoardComment";
import { FETCH_BOARD_COMMENTS } from "../queries/useQueryFetchBoardComment";
import { Modal } from "antd";
import { useMutationCreateBoardComment } from "../mutations/useMutationCreateBoardComment";
import { useRouter } from "next/router";
import { useMutationUpdateBoardComment } from "../mutations/useMutationUpdateBoardComment";
import type { UseFormReset } from "react-hook-form";
import { useRecoilState } from "recoil";
import { ratingState } from "../../store";

// useBoardComment가 실행될때 인자로 받는 데이터의 타입 정의
interface IBoardCommentArgs {
  boardId: string;
  boardCommentId?: string;
  toggleEdit?: () => void;
  reset?: UseFormReset<{
    writer: string;
    password: string;
    contents: string;
    rating: string | number;
  }>;
}
// 댓글 수정시 필요한 객체의 타입
interface IUpdateBoardCommentInput {
  contents?: string;
}

// Board Comment의 api들을 모아놓은 customHooks
export const useBoardComment = (args: IBoardCommentArgs) => {
  const router = useRouter();
  const [updateBoardComment] = useMutationUpdateBoardComment();
  const [createBoardComment] = useMutationCreateBoardComment();
  const [deleteBoardComment] = useMutationDeleteBoardComment();

  const [password, setPassword] = useState("");
  const [rating, setRating] = useRecoilState(ratingState);
  /** 댓글 수정시에는 비밀번호가 필요하기 때문에 onChange로 비밀번호를 입력 받는다 */
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  /* 댓글 삭제 함수 */
  const onClickCommentDelete = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      if (!args.boardCommentId) return;
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: args.boardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });

      Modal.success({ content: "댓글이 삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  /** 댓글 등록 함수
   *  댓글 등록후에 refetch를 통해 화면에 보여줌
   */
  const onClickCommentRegister = async (data: any): Promise<void> => {
    try {
      if (!localStorage.getItem("accessToken")) {
        Modal.error({ content: "로그인 후 이용해주세요" });
        void router.push(`/${router.asPath}`);
        return;
      }

      await createBoardComment({
        variables: {
          boardId: args.boardId,
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
            rating: rating ?? 0,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: args.boardId },
          },
        ],
      });

      if (!args.reset) return;
      args.reset({
        writer: "",
        password: "",
        contents: "",
      });
      setRating(0);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  /** 댓글 수정 함수 */
  const onClickUpdateComment = async (data: any): Promise<void> => {
    try {
      if (data.contents === "") {
        Modal.error({ content: "내용이 수정되지 않았습니다" });
        return;
      }
      if (data.password === "") {
        Modal.error({ content: "비밀번호를 입력해주세요" });
        return;
      }
      // 댓글도 게시글처럼 객체에 수정할 데이터를 넣어서 바인딩해준다
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (data.contents !== "")
        updateBoardCommentInput.contents = data.contents;
      if (!args.boardCommentId) return;

      await updateBoardComment({
        variables: {
          password: data.password,
          boardCommentId: args.boardCommentId,
          updateBoardCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      if (args.toggleEdit) args.toggleEdit();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onChangePassword,
    onClickCommentDelete,
    onClickCommentRegister,
    onClickUpdateComment,
  };
};
