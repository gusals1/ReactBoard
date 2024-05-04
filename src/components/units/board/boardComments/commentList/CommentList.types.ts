import type {
  IBoardComment,
  IQuery,
} from "../../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  FetchMoreComment: () => void;
}

export interface ICommentListItemProps {
  el: IBoardComment;
}
