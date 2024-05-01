import * as S from "./login.styles";
import type { ILoginUIProps } from "./login.types";

export default function LoginPageUI(props: ILoginUIProps): JSX.Element {
  return (
    <S.LoginWrapper>
      <S.Title>Login</S.Title>
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
        </S.InputWrap>
        <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
        <S.Contour></S.Contour>
        <S.Account>
          계정이 없으신가요?{" "}
          <S.SignUp onClick={props.onMovedSignUp}>가입하기</S.SignUp>
        </S.Account>
      </S.LoginCard>
    </S.LoginWrapper>
  );
}
