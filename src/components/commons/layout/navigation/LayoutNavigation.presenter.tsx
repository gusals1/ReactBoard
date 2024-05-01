import * as S from "./LayoutNavigation.styles";
import type { ILayoutNavigtionUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(
  props: ILayoutNavigtionUIProps
): JSX.Element {
  const Nav = [
    { title: "firebase 게시판", page: "/firebaseBoards" },
    { title: "자유게시판", page: "/boards" },
    { title: "중고마켓", page: "/" },
    { title: "마이페이지", page: "/" },
  ];

  return (
    <S.NavWrapper>
      <S.Navigation>
        {Nav.map((el) => (
          <S.NavMenu key={el.title}>
            <S.NavDivide id={el.page} onClick={props.onClickMovePage}>
              {el.title}
            </S.NavDivide>
          </S.NavMenu>
        ))}
      </S.Navigation>
    </S.NavWrapper>
  );
}
