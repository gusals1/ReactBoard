import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
`;
export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 100%;
  object-fit: none;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
export const Profile = styled.img`
  max-width: 100%;
  object-fit: none;
`;
export const ProfileMore = styled.img`
  max-width: 100%;
  object-fit: none;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const LoginBtn = styled.button`
  width: 92px;
  height: 44px;
  border: none;
  background: #fff;
  font-weight: bold;
  cursor: pointer;
`;
export const SignInBtn = styled.button`
  width: 92px;
  height: 44px;
  color: #fff;
  font-weight: bold;
  background: #35c5f0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
