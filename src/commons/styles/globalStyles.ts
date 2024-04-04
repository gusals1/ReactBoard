import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR,sans-serif";
  }
  /* @font-face {
    font-family: "Noto Sans KR,sans-serif";
    src: url("나중에 폰트 다운받아서 폴더에 넣고 url 달기");
  } */
  img {
    max-width: 100%;
    display: block;
  }
`;
