import { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentWriteUIProps{
  onChangeCommentWriter: (e: ChangeEvent<HTMLInputElement>)=> void
  onChangeCommentPassword: (e: ChangeEvent<HTMLInputElement>)=> void
  onChangeCommentContents: (e: ChangeEvent<HTMLTextAreaElement>)=> void
  onChangeCommentRating: (e: ChangeEvent<HTMLDivElement>)=> void
  onClickCommentRegister: (e:MouseEvent<HTMLButtonElement>)=> void
  commentContents: string
}