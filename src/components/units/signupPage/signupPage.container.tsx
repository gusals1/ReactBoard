import { useState } from "react";
import type { ChangeEvent } from "react";
import SignUpPageUI from "./signupPage.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signupPage.quries";
import type {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

export default function SignUpPage(): JSX.Element {
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const onClickSignUp = async (): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            name,
            password,
          },
        },
      });
      Modal.success({ content: "로그인에 성공하셨습니다" });
      console.log(result.data?.createUser._id);
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <SignUpPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickSignUp={onClickSignUp}
    />
  );
}
