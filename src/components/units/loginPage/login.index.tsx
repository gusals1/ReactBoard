import * as S from "./login.styles";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../commons/hooks/customs/useMoveToPage";
import { useUserData } from "../../commons/hooks/customs/useUserData";

export interface ILoginform {
  email: string;
  password: string;
}
export default function LoginPageUI(): JSX.Element {
  const { onClickLogin } = useUserData();

  const { onClickMoveToPage } = useMoveToPage();

  const { register, handleSubmit } = useForm<ILoginform>();

  return (
    <S.LoginWrapper>
      <S.Title>Login</S.Title>
      <S.LoginCard>
        <S.InputWrap>
          <S.InputRow type="text" placeholder="이메일" {...register("email")} />
          <S.InputRow
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
        </S.InputWrap>
        <S.LoginButton onClick={handleSubmit(onClickLogin)}>
          로그인
        </S.LoginButton>
        <S.Contour></S.Contour>
        <S.Account>
          계정이 없으신가요? &nbsp;
          <S.SignUp onClick={onClickMoveToPage("/signup")}>가입하기</S.SignUp>
        </S.Account>
      </S.LoginCard>
    </S.LoginWrapper>
  );
}
