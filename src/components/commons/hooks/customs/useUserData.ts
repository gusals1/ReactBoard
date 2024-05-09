import { Modal } from "antd";
import { useMutationCreateuser } from "../mutations/useMutationCreateUser";
import { useRouter } from "next/router";
import type { ISignupForm } from "../../../units/signupPage/signupPage.index";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import type { ILoginform } from "../../../units/loginPage/login.index";

export const useUserData = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [createUser] = useMutationCreateuser();
  const [loginUser] = useMutationLoginUser();

  const onClickSignUp = async (data: ISignupForm): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
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

  const onClickLogin = async (data: ILoginform): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
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

  return { onClickSignUp, onClickLogin };
};
