import { useRecoilState } from "recoil";
import * as S from "./LayoutHeader.styles";
import { accessTokenState } from "../../store";
import { useQueryFetchUserLoggedIn } from "../../hooks/queries/useQueryFetchUserLoggedIn";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";
import { useUserData } from "../../hooks/customs/useUserData";
import PaymentButton from "../../payment/payment.index";

export default function LayoutHeader(): JSX.Element {
  // 유저 데이터를 조회 API
  const { data } = useQueryFetchUserLoggedIn();
  // 로그인 시에 저장되는 accessToken global state
  const [accessToken] = useRecoilState(accessTokenState);
  // 페이지 이동 API
  const { onClickMoveToPage } = useMoveToPage();
  // 로그아웃 API
  const { onClickLogout } = useUserData();

  // 유저에게 포인트가 있는지 확인해보는용
  // if (data?.fetchUserLoggedIn) {
  //   console.log("point", data?.fetchUserLoggedIn.userPoint?.amount);
  // }

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
            {/* 충전하기 버튼 */}
            <PaymentButton />
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
