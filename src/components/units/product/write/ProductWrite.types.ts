import type { IQuery } from "../../../../commons/types/generated/types";

export interface IRegisterButtonProps {
  isEdit: boolean;
  isValid: boolean;
}

export interface IProductWriteProps {
  data?: Pick<IQuery, "fetchUseditem">;
}

export interface IUseditemForm {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  images?: File[] | string[];
}
