import { useState } from "react";
import type { ChangeEvent } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD_COMMENTS } from "./BoardCommentwrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/BoardCommentList.queries";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";

export default function BoardComment(): JSX.Element {
  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContents, setCommentContents] = useState("");
  const [commentRating, setCommentRating] = useState(0.0);

  const router = useRouter();
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENTS);

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
  const onChangeCommentRating = (e: ChangeEvent<HTMLDivElement>): void => {
    console.log(setCommentRating);
  };

  const onClickCommentRegister = async (): Promise<void> => {
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
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentRating={onChangeCommentRating}
      onClickCommentRegister={onClickCommentRegister}
      commentContents={commentContents}
    />
  );
}
