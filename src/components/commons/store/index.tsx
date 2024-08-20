import { RecoilEnv, atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

// 수정, 등록 구분시에 사용하는 state
export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const ratingState = atom({
  key: "ratingstate",
  default: 0,
});

// 로그인 시 accessToken을 담는 state
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

// accessToken의 여부에 따라서 바꾸는 state
export const isAccessLogin = atom({
  key: "isAccessLogin",
  default: false,
});

// 토큰 만료시에 사용될 refreshToken을 담는 state
export const restoreAccessTokenLodable = selector({
  key: "restoreAccessTokenLodable",
  get: async () => {
    try {
      const newAccessToken = await getAccessToken();
      return newAccessToken;
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  },
});
