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
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentRating, setCommentRating] = useState(0.0);

  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENTS);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

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

  const onClickCommentRegister = async (): Promise<void> => {
    if (commentPassword === "") return;
    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템 오류발생");
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

  const onClickUpdateComment = async (): Promise<void> => {
    try {
      if (
        props.el === undefined ||
        props.isEdit === undefined ||
        props.setIsEdit === undefined
      )
        return;
      if (commentContents === "") {
        Modal.error({ content: "내용이 수정되지 않았습니다" });
        return;
      }

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
