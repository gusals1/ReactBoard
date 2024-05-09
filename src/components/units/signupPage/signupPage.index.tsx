import { useForm } from "react-hook-form";
import * as S from "./signupPage.styles";
import { useUserData } from "../../commons/hooks/customs/useUserData";

export interface ISignupForm {
  email: string;
  password: string;
  name: string;
}

export default function SignUpPage(): JSX.Element {
  const { onClickSignUp } = useUserData();

  const { register, handleSubmit } = useForm<ISignupForm>();

  return (
    <S.LoginWrapper>
      <S.Title>회원가입</S.Title>
      <S.LoginCard>
        <S.InputWrap>
          <S.InputRow type="text" placeholder="이메일" {...register("email")} />
          <S.InputRow
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          {/* <S.InputRow type="password" placeholder="비밀번호 확인" /> */}
          <S.InputRow type="text" placeholder="닉네임" {...register("name")} />
        </S.InputWrap>
        <S.LoginButton onClick={handleSubmit(onClickSignUp)}>
          회원가입
        </S.LoginButton>
      </S.LoginCard>
    </S.LoginWrapper>
  );
}
