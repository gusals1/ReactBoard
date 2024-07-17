import { useRouter } from "next/router";
import * as S from "./LayoutNavigation.styles";

import type { MouseEvent } from "react";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const Nav = [
    { title: "자유게시판", page: "/boards" },
    { title: "중고마켓", page: "/shop" },
    { title: "마이페이지", page: "/" },
  ];

  const onClickMovePage = (e: MouseEvent<HTMLDivElement>): void => {
    void router.push(e.currentTarget.id);
  };
  return (
    <S.NavWrapper>
      <S.Navigation>
        {Nav.map((el) => (
          <S.NavMenu key={el.title}>
            <S.NavDivide id={el.page} onClick={onClickMovePage}>
              {el.title}
            </S.NavDivide>
          </S.NavMenu>
        ))}
      </S.Navigation>
    </S.NavWrapper>
  );
}
