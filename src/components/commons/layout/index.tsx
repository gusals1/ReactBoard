import styled from "@emotion/styled";
import LayoutBanner from "./banner/LayoutBanner.index";
import LayoutNavigation from "./navigation/LayoutNavigation.index";
import LayoutFooter from "./footer/LayoutFooter.index";
import { useRouter } from "next/router";
import LayoutHeader from "./header/LayoutHeader.index";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const LayoutMain = styled.div`
    margin: auto;
    padding: 20px;
  `;
  // 로그인 회원가입 페이지에서는 메인만 보여주기 때문에 경로에 따라 안보이게 변경해줌
  let isHidden = false;
  const isHiddenLogin = router.asPath.includes("/login");
  const isHiddenSignup = router.asPath.includes("/signup");

  if (isHiddenLogin || isHiddenSignup) {
    isHidden = true;
  }

  return (
    <>
      {!isHidden && <LayoutHeader />}
      {!isHidden && <LayoutBanner />}
      {!isHidden && <LayoutNavigation />}
      <LayoutMain>{props.children}</LayoutMain>
      {!isHidden && <LayoutFooter />}
    </>
  );
}
