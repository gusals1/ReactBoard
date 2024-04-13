import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import type { IBoardComment } from "../../../../../commons/types/generated/types";
export interface IBoardCommentProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

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
  onClickUpdateComment: () => Promise<void>;
  isEdit?: boolean;
  el?: IBoardComment;
}
