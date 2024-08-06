import * as S from "./LayoutFooter.styles";

export default function LayoutFooter(): JSX.Element {
  return (
    <S.Wrapper>
      <S.WrapSns>
        <S.SnsIcon src="/images/kakao.png" alt="" />
        <S.SnsIcon src="/images/facebook.png" alt="" />
        <S.SnsIcon src="/images/instagram.png" alt="" />
      </S.WrapSns>
      <S.Line />
      <S.CopyRight>@2024 myBoard & Market</S.CopyRight>
    </S.Wrapper>
  );
}
