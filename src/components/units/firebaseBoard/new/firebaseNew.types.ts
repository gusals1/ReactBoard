import type { ChangeEvent } from "react";

export interface IFireBaseNewProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRegister: () => Promise<void>;
}
