import * as S from "./LayoutHeader.styles";

export default function LayoutHeaderUI(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.HeaderInner>
        <S.Logo src="/images/logo.png" alt="" />
        {/* <S.ProfileWrapper>
          <S.Profile src="/images/avatar.png" alt="" />
          <S.ProfileMore src="/images/profile_more.png" alt="" />
        </S.ProfileWrapper> */}
        <S.BtnWrapper>
          <S.LoginBtn>로그인</S.LoginBtn>
          <S.SignInBtn>회원가입</S.SignInBtn>
        </S.BtnWrapper>
      </S.HeaderInner>
    </S.HeaderWrapper>
  );
}
