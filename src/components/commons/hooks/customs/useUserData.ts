import { Modal } from "antd";
import { useMutationCreateuser } from "../mutations/useMutationCreateUser";
import { useRouter } from "next/router";
import type { ISignupForm } from "../../../units/signupPage/signupPage.index";
import { useMutationLoginUser } from "../mutations/useMutationLoginUser";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import type { ILoginform } from "../../../units/loginPage/login.index";
import { useMutationLogoutUser } from "../mutations/useMutationLogoutUser";

export const useUserData = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [createUser] = useMutationCreateuser();
  const [loginUser] = useMutationLoginUser();
  const [logoutUser] = useMutationLogoutUser();

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
      console.log(result.data?.createUser._id);
      Modal.success({ content: "가입되셨습니다" });
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

      setAccessToken(accessToken);
      Modal.success({ content: "로그인 성공하셨습니다." });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickLogout = async () => {
    try {
      const result = await logoutUser();

      if (result.data?.logoutUser === true) {
        setAccessToken("");
        Modal.success({ content: "로그아웃 되었습니다." });
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onClickSignUp, onClickLogin, onClickLogout };
};
