import { useRecoilState } from "recoil";
import * as S from "./LayoutHeader.styles";
import { accessTokenState } from "../../store";
import { useQueryFetchUserLoggedIn } from "../../hooks/queries/useQueryFetchUserLoggedIn";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useUserData } from "../../hooks/customs/useUserData";

export default function LayoutHeader(): JSX.Element {
  const { data } = useQueryFetchUserLoggedIn();

  const [accessToken] = useRecoilState(accessTokenState);
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogout } = useUserData();

  return (
    <S.HeaderWrapper>
      <S.HeaderInner>
        <S.Logo
          src="/images/logo.png"
          alt=""
          onClick={onClickMoveToPage("/boards")}
        />
        {accessToken !== "" ? (
          <S.ProfileWrapper>
            <S.Profile src="/images/avatar.png" alt="asd" />
            <S.UserInfo>
              <S.Strong>{data?.fetchUserLoggedIn.name}</S.Strong>님 환영합니다!
            </S.UserInfo>
            <S.ProfileMore src="/images/profile_more.png" alt="" />
            <S.LogoutBtn onClick={onClickLogout}>로그아웃</S.LogoutBtn>
          </S.ProfileWrapper>
        ) : (
          <S.ProfileWrapper>
            <S.LoginBtn onClick={onClickMoveToPage("/login")}>
              로그인
            </S.LoginBtn>
            <S.SignInBtn onClick={onClickMoveToPage("/signup")}>
              회원가입
            </S.SignInBtn>
          </S.ProfileWrapper>
        )}
      </S.HeaderInner>
    </S.HeaderWrapper>
  );
}
