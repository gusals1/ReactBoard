import styled from "@emotion/styled";

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProfileImage = styled.img`
  margin-right: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-weight: bold;
`;
export const CreatedAt = styled.div`
  font-size: 14px;
  color: #aaa;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const Clip = styled.img`
  max-width: 32px;
  height: 32px;
  margin-right: 5px;
`;
export const Location = styled.img`
  width: 32px;
  height: 32px;
`;
export const LocationBox = styled.div`
  position: absolute;
  right: 4px;
  bottom: 36px;
  background-color: #000;
  opacity: 0.4;
  width: 350px;
  border-radius: 10px;
  border: none;
  color: #fff;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 5px;
`;
export const LocationText = styled.p`
  font-size: 12px;
`;
export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ddd;
  box-shadow: 0px 0px 1px #ccc;
  margin: 20px 0;
`;
