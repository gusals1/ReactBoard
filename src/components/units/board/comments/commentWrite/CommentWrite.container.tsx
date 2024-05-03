import { useState } from "react";
import type { ChangeEvent } from "react";
import BoardCommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  CREATE_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./Commentwrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/CommentList.queries";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../../commons/types/generated/types";
import type { IBoardCommentProps } from "./CommentWrite.types";
import { Modal } from "antd";

export default function BoardComment(props: IBoardCommentProps): JSX.Element {
  // 게시글의 댓글 등록
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentRating, setCommentRating] = useState(0.0);

  const router = useRouter();

  // 댓글 등록
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENTS);

  // 댓글 수정
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  // 댓글 작성자, 비밀번호 별점 등을 state에 넣어주는 부분
  const onChangeCommentWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setCommentWriter(e.target.value);
  };
  const onChangeCommentPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setCommentPassword(e.target.value);
  };
  const onChangeCommentContents = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setCommentContents(e.target.value);
  };
  const onChangeCommentRating = (rating: number): void => {
    setCommentRating(rating);
  };

  /** 댓글 등록 함수
   *  댓글 등록후에 refetch를 통해 화면에 보여줌
   */
  const onClickCommentRegister = async (): Promise<void> => {
    if (commentPassword === "") return; // 비밀번호가 없으면 return
    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템 오류발생");
        return;
      }

      if (!localStorage.getItem("accessToken")) {
        Modal.error({ content: "로그인 후 이용해주세요" });
        void router.push(`/${router.asPath}`);
        return;
      }

      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating: commentRating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    setCommentWriter("");
    setCommentPassword("");
    setCommentRating(0);
    setCommentContents("");
  };
  /** 댓글 수정 함수 */
  const onClickUpdateComment = async (): Promise<void> => {
    try {
      if (
        // props 값들이 담기지 않았으면 return(오류막기)
        props.el === undefined ||
        props.isEdit === undefined ||
        props.setIsEdit === undefined
      )
        return;
      if (commentContents === "") {
        Modal.error({ content: "내용이 수정되지 않았습니다" });
        return;
      }
      // 댓글도 게시글처럼 객체에 수정할 데이터를 넣어서 바인딩해준다
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (commentContents !== "")
        updateBoardCommentInput.contents = commentContents;
      if (commentRating !== props.el.rating)
        updateBoardCommentInput.rating = commentRating;

      await updateBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: props.el._id,
          updateBoardCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <BoardCommentWriteUI
      commentWriter={commentWriter}
      commentPassword={commentPassword}
      commentContents={commentContents}
      commentRating={commentRating}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentRating={onChangeCommentRating}
      onClickCommentRegister={onClickCommentRegister}
      onClickUpdateComment={onClickUpdateComment}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
