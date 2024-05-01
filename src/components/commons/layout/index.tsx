import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const LayoutMain = styled.div`
    margin: auto;
  `;

  const HIDDEN_HEADERS = ["/login", "/signup"];
  const HIDDEN_BANNER = ["/login", "/signup"];
  const HIDDEN_NAVIGATION = ["/login", "/signup"];
  const HIDDEN_FOOTER = ["/login", "/signup"];

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isHiddenNav = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      {!isHiddenNav && <LayoutNavigation />}
      <LayoutMain>{props.children}</LayoutMain>
      {!isHiddenFooter && <LayoutFooter />}
    </>
  );
}
