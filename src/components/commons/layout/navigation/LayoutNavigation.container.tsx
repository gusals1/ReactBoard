import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import type { MouseEvent } from "react";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickMovePage = (e: MouseEvent<HTMLDivElement>): void => {
    void router.push(e.currentTarget.id);
  };
  return <LayoutNavigationUI onClickMovePage={onClickMovePage} />;
}
