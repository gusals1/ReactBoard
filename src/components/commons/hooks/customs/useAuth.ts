import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";

export const useAuth = (): void => {
  const [accessToken] = useRecoilState(accessTokenState);
  // const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLodable);
  const router = useRouter();

  useEffect(() => {
    void getAccessToken().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.error({ content: "로그인 후 이용해주세요" });
        void router.push("/boards");
      }
    });
  }, [accessToken]);

  // useEffect(() => {
  //   void restoreAccessToken.toPromise().then((newAccessToken) => {
  //     console.log("new", newAccessToken);
  //     if (newAccessToken === undefined) {
  //       Modal.error({ content: "로그인 후 이용해주세요" });
  //       void router.push("/boards");
  //     }
  //   });
  // }, []);
};
/*
  AccessToken 갱신 로직

  사용자가 인증에 성공하면 AccessToken과 RefreshToken을 발급받습니다.
  AccessToken은 짧은 만료 시간을 가집니다.  RefreshToken은 긴 만료 시간을 가집니다.
  accessToken의 만료시간은 짧은데 이유는 토큰 만료 시간이 너무 길면 보안상에 문제가 생기기 때문

  (accessToken이 발급되면 백엔드에서 데이터 요청을 받으면 인가를 해주는데 이때 필요한게 accessToken임.
  그래서 프론트에서는 login API를 날려 반환값으로 accessToken을 받고 요청 헤더에 담아서 요청을 함)

  AccessToken이 만료되면
  클라이언트는 RefreshToken을 사용하여 새로운 AccessToken을 요청합니다.
  서버는 RefreshToken이 유효한지 확인하고, 새로운 AccessToken과 갱신된 RefreshToken을 발급합니다.
  
  사용자가 로그아웃하면
  서버에서 해당 RefreshToken을 무효화합니다.
  클라이언트에서도 AccessToken과 RefreshToken을 삭제합니다.


*/
