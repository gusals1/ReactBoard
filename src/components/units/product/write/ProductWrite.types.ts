import type { IQuery } from "../../../../commons/types/generated/types";

export interface IRegisterButtonProps {
  isEdit: boolean;
  isValid: boolean;
}

export interface IProductWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}
