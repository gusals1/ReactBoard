import styled from "@emotion/styled";
import type { MatchKeywordProps } from "./ProductList.types";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`; // 전체를 감싸는 box의 style

export const Title = styled.h1`
  font-size: 36px;
  margin: 80px 0 40px;
  text-align: center;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
export const PostCard = styled.div`
  margin: 60px 0 30px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 8px #999999;
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  min-height: 242px;
`;
export const BestBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const MainTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;
export const SubTitle = styled.p`
  font-size: 12px;
  color: #4f4f4f;
`;
export const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BestPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  flex-grow: 3;
`;
export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Good = styled.img`
  display: block;
  max-width: 100%;
`;

export const LikeCount = styled.div`
  font-weight: 500;
`;

export const TableTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SalesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
export const Sale = styled.div`
  width: 100%;
`;
export const RadioInput = styled.input`
  display: none;
  &:checked + label {
    color: #fff;
    font-weight: bold;
    background-color: #85dfff;
  }
`;
export const RadioLabel = styled.label`
  display: block;
  box-sizing: border-box;
  font-size: 18px;
  padding: 15px 25px;
  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 10px 10px 0 0;
`;
// table style
export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  font-size: 16px;
  padding: 20px 0;
  :hover {
    color: #3333ff;
  }
  cursor: pointer;
`;

export const ProdImage = styled.img`
  width: 14%;
  min-height: 160px;
`;

export const ProdInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;
export const ProdName = styled.span`
  font-size: 24px;
  font-weight: 500;
  display: inline-block;
  margin: 8px 0;
`;
export const ProdRemarks = styled.p`
  font-size: 16px;
  color: #4f4f4f;
`;
export const ProdTags = styled.p`
  font-size: 16px;
  color: #bdbdbd;
  margin: 8px 0;
`;

export const ProdProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  gap: 4px;
`;
export const Profile = styled.img`
  width: 24px;
`;
export const UserName = styled.span`
  color: #4f4f4f;
  font-weight: 500;
`;

export const ProdPrice = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const IconDollar = styled.img`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 15px;
`;
export const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
export const BtmWrapper = styled.div`
  margin: 40px 0 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

export const RegisterButton = styled.button`
  position: absolute;
  right: 0;
  background: #fff;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  :hover {
    background: #35c5f0;
    color: #fff;
    font-weight: bold;
    border: #35c5f0;
    transition: all 0.1s ease;
  }
`;

export const MatchKeyword = styled.span`
  background: ${(props: MatchKeywordProps) =>
    props.isMatch ? "#85dfff" : "none"};
  color: ${(props: MatchKeywordProps) => (props.isMatch ? "#fff" : "none")};
`;
