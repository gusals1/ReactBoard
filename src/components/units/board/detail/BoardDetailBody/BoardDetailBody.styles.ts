import { css } from "@emotion/react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";

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
