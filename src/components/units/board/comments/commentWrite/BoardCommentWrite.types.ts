import type { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentWriteUIProps {
  commentWriter: string;
  commentPassword: string;
  commentContents: string;
  commentRating: number;
  onChangeCommentWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentRegister: (e: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentRating: (rating: number) => void;
}
