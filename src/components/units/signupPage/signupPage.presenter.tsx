import * as S from "./signupPage.styles";
import type { ISignUpPageProps } from "./signupPage.types";

export default function SignUpPageUI(props: ISignUpPageProps): JSX.Element {
  return (
    <S.LoginWrapper>
      <S.Title>회원가입</S.Title>
      <S.LoginCard>
        <S.InputWrap>
          <S.InputRow
            type="text"
            placeholder="이메일"
            onChange={props.onChangeEmail}
          />
          <S.InputRow
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          {/* <S.InputRow type="password" placeholder="비밀번호 확인" /> */}
          <S.InputRow
            type="text"
            placeholder="닉네임"
            onChange={props.onChangeName}
          />
        </S.InputWrap>
        <S.LoginButton onClick={props.onClickSignUp}>회원가입</S.LoginButton>
      </S.LoginCard>
    </S.LoginWrapper>
  );
}
