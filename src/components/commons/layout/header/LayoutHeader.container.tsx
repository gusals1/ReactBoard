import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onMoveHome = (): void => {
    void router.push("/boards");
  };

  const onMoveLoginPage = (): void => {
    void router.push("/login");
  };

  const onMoveSignUpPage = (): void => {
    void router.push("/signup");
  };
  const onRemoveAccessToken = (): void => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <LayoutHeaderUI
      onMoveHome={onMoveHome}
      onMoveLoginPage={onMoveLoginPage}
      onMoveSignUpPage={onMoveSignUpPage}
      onRemoveAccessToken={onRemoveAccessToken}
    />
  );
}
