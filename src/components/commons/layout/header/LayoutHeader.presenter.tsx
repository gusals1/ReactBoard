import { useRecoilState } from "recoil";
import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderProps } from "./LayoutHeader.types";
import { accessTokenState, isAccessLogin } from "../../store";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./LayoutHeader.quries";
import type { IQuery } from "../../../../commons/types/generated/types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [accessToken] = useRecoilState(accessTokenState);
  const [isAccess, setIsAccess] = useRecoilState(isAccessLogin);

  if (accessToken !== "") setIsAccess(true);
  return (
    <S.HeaderWrapper>
      <S.HeaderInner>
        <S.Logo src="/images/logo.png" alt="" onClick={props.onMoveHome} />
        {isAccess ? (
          <S.ProfileWrapper>
            <S.Profile src="/images/avatar.png" alt="" />
            <S.UserInfo>
              <S.Strong>{data?.fetchUserLoggedIn.name}</S.Strong>님 환영합니다!
            </S.UserInfo>
            <S.ProfileMore src="/images/profile_more.png" alt="" />
            <S.LogoutBtn onClick={props.onRemoveAccessToken}>
              로그아웃
            </S.LogoutBtn>
          </S.ProfileWrapper>
        ) : (
          <S.BtnWrapper>
            <S.LoginBtn onClick={props.onMoveLoginPage}>로그인</S.LoginBtn>
            <S.SignInBtn onClick={props.onMoveSignUpPage}>회원가입</S.SignInBtn>
          </S.BtnWrapper>
        )}
      </S.HeaderInner>
    </S.HeaderWrapper>
  );
}
