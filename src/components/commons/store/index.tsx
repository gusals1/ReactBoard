import { RecoilEnv, atom } from "recoil";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isAccessLogin = atom({
  key: "isAccessLogin",
  default: false,
});
