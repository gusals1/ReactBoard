import { useRouter } from "next/router";
import LoginPageUI from "./login.presenter";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./login.quries";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../commons/store";

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onMovedSignUp = (): void => {
    void router.push("/signup");
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다" });
        return;
      }
      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);
      Modal.success({ content: "로그인 성공하셨습니다." });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginPageUI
      onMovedSignUp={onMovedSignUp}
      onClickLogin={onClickLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
}
