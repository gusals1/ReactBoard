import type { IQuery } from "../../../../commons/types/generated/types";

// BoardWrite 함수 컴포넌트
export interface IBoardWriteProps {
  data?: Pick<IQuery, "fetchBoard">;
}

// 등록 버튼
export interface IRegisterButtonProps {
  isEdit: boolean;
  isValid: boolean;
}

// useForm의 데이터 형식
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
  images?: File[] | string[];
}
