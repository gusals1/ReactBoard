import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ReactPlayer from "react-player";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto 0;
`;

export const Main = styled.div`
  padding: 80px 102px;
  width: 100%;
  box-shadow: 0px 0px 10px gray;
`; // 전체를 감싸는 box의 style

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
export const Body = styled.div`
  width: 100%;
`;
export const BoardImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const BoardImage = styled.img`
  width: 50%;
  height: auto;
  margin: auto;
`;
export const BoardTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: 80px 0 40px;
`;
export const BoardContents = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;
export const YoutubeWrapper = styled.div`
  margin: 120px 0;
  width: 100%;
`;
export const BoardYoutubePlayer = styled(ReactPlayer)`
  margin: auto;
`;

export const LikeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`;
export const LikeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LikeIcon = styled.img`
  max-width: 100%;
`;

const LikeCountStyle = css`
  font-size: 18px;
  font-weight: 400;
`;

export const LikeCount = styled.p`
  ${LikeCountStyle}
  color: #FFD600;
`;
export const DisLikeCount = styled.p`
  ${LikeCountStyle}
  color: #828282;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  margin: 80px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #fff;
  border: 1px solid #ccc;
  margin: 0 20px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: gold;
    border: #fff;
  }
`;
