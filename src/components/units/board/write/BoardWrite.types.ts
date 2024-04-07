import type { ChangeEvent, MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  zipcode: string;
  address: string;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeDetailAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickPost: () => void;
  handleComplete: (data: Address) => void;
  ModalToggle?: () => void;
  isOpenModal: boolean;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IRegisterButtonProps {
  isActive: boolean;
  isEdit: boolean;
}
