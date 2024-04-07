import * as S from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(): JSX.Element {
  return (
    <S.NavWrapper>
      <S.Navigation>
        <S.NavMenu>
          <S.NavDivide>자유게시판</S.NavDivide>
        </S.NavMenu>
        <S.NavMenu>
          <S.NavDivide>중고마켓</S.NavDivide>
        </S.NavMenu>
        <S.NavMenu>
          <S.NavDivide> 마이페이지</S.NavDivide>
        </S.NavMenu>
      </S.Navigation>
    </S.NavWrapper>
  );
}
