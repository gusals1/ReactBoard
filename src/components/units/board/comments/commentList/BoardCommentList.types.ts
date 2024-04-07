import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  onClickCommentDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDeleteModal: (e: MouseEvent<HTMLImageElement>) => void;
  onChangeModalPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  ModalToggle: () => void;
  openDeleteModal: boolean;
}
