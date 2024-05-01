import type { ChangeEvent } from "react";

export interface ILoginUIProps {
  onMovedSignUp: () => void;
  onClickLogin: () => Promise<void>;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}
