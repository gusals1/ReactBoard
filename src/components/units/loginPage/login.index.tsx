import * as S from "./login.styles";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../commons/hooks/customs/useMoveToPage";
import { useUserData } from "../../commons/hooks/customs/useUserData";

export interface ILoginform {
  email: string;
  password: string;
}
export default function LoginPageUI(): JSX.Element {
  // useUserData === 로그인 회원가입 API를 따로 분리해놓은 hooks
  // useMoveToPage === 페이지 이동을 분리해놓은것 useRouter 사용
  const { onClickLogin } = useUserData();
  const { onClickMoveToPage } = useMoveToPage();
  // useForm을 사용하는데 여기에 들어가는 데이터는 ILoginform이다
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
        {/* handleSubmit(onClickLoginExample) */}
        <S.LoginButton onClick={handleSubmit(onClickLogin)}>
          로그인
        </S.LoginButton>
        <S.Contour />
        <S.Account>
          계정이 없으신가요? &nbsp;
          <S.SignUp onClick={onClickMoveToPage("/signup")}>가입하기</S.SignUp>
        </S.Account>
      </S.LoginCard>
    </S.LoginWrapper>
  );
}
