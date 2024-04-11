import styled from "@emotion/styled";

export const PageNumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
`;

export const PageNum = styled.p`
  margin: 0 8px;
  cursor: pointer;
  :active {
    font-weight: bold;
  }
`;
export const PrevArrow = styled.p`
  margin-right: 10px;
`;
export const NextArrow = styled.p`
  margin-left: 10px;
`;
