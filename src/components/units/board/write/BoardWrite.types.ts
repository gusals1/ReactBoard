import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IRegisterButtonProps {
  isEdit: boolean;
  isValid: boolean;
}

export interface Iform {
  writer: string;
  password: string;
  title: string;
  contents: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  youtubeUrl?: string;
  images?: string[];
}
