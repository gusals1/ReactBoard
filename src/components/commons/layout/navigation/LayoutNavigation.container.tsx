import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickMovePage = (): void => {
    void router.push(`/boards`);
  };
  return <LayoutNavigationUI onClickMovePage={onClickMovePage} />;
}
