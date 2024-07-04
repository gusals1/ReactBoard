import styled from "@emotion/styled";

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
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: gold;
    border: #fff;
  }
`;
export const BuyButton = styled.button`
  display: block;
  width: 250px;
  height: 60px;
  background: #fae100;
  border: none;
  margin: 0 auto 80px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 8px;
`;
export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ddd;
  box-shadow: 0px 0px 1px #ccc;
  margin: 20px 0;
`;
