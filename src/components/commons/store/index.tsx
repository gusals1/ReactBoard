import { RecoilEnv, atom, selector } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isAccessLogin = atom({
  key: "isAccessLogin",
  default: false,
});

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
