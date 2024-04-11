import * as S from "./LayoutNavigation.styles";

interface ILayoutNavigtionUIProps {
  onClickMovePage: () => void;
}

export default function LayoutNavigationUI(
  props: ILayoutNavigtionUIProps
): JSX.Element {
  return (
    <S.NavWrapper>
      <S.Navigation>
        <S.NavMenu>
          <S.NavDivide onClick={props.onClickMovePage}>자유게시판</S.NavDivide>
        </S.NavMenu>
        <S.NavMenu>
          <S.NavDivide>중고마켓</S.NavDivide>
        </S.NavMenu>
        <S.NavMenu>
          <S.NavDivide>마이페이지</S.NavDivide>
        </S.NavMenu>
      </S.Navigation>
    </S.NavWrapper>
  );
}
