import type { MouseEvent } from "react";
import type { IQuery } from "../../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  onClickCommentDelete: (e: MouseEvent<HTMLImageElement>) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
}
