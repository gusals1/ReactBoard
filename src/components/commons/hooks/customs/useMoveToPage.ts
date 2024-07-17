import { useRouter } from "next/router";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  /** onClickMoveToPage를 호출할때 인수로 준 문자열 경로로 페이지 이동하는 함수 */
  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
  };

  return { onClickMoveToPage };
};
