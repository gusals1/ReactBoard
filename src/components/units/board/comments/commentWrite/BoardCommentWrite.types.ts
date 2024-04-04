import type { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeCommentWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCommentContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCommentRegister: (e: MouseEvent<HTMLButtonElement>) => void;
  onChangeCommentRating: any;
  commentContents: string;
}
