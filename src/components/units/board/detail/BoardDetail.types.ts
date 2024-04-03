import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  MoveToEdit: () => void;
  MoveToList: () => void;
  onClickDelete: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}
