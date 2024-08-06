import styled from "@emotion/styled";
import type { MatchKeywordProps } from "./BoardList.types";

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
  width: 100%;
  margin: 60px 0 30px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 8px #999999;
`;
export const Image = styled.img`
  max-width: 100%;
`;
export const TextBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const PostTitleBest = styled.h2`
  font-size: 16px;
  margin-bottom: 15px;
`;
export const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 3;
`;
export const IconProfile = styled.img`
  max-width: 100%;
  margin-right: 8px;
`;
export const ProfileName = styled.div`
  font-weight: 800;
`;
export const Good = styled.img`
  width: 24px;
`;
export const Dates = styled.div`
  font-size: 12px;
  color: #aaa;
  flex-grow: 3;
`;
export const NumberLike = styled.div`
  font-weight: 500;
`;

export const SearchArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 44px;
`;
export const SearchBox = styled.input`
  height: 52px;
  background: url("/images/search.png") no-repeat 20px center;
  background-color: #eee;
  border-radius: 10px;
  text-indent: 60px;
  border: none;
  outline: none;
  flex-grow: 5;

  ::placeholder {
    color: #000;
    font-weight: bold;
    font-size: 15px;
  }
`;
export const SelectDate = styled.input`
  height: 52px;
  flex-grow: 1;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`;
export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background: #000;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;
// table style
export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
export const TableHeader = styled.h3`
  display: flex;
  width: 100%;
  height: 52px;
  line-height: 52px;
  font-size: 18px;
`;
export const TableRow = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  border-top: 1px solid #ccc;
  font-size: 16px;
  :hover {
    color: #3333ff;
  }
  cursor: pointer;
`;

export const PostId = styled.div`
  width: 8%;
`;
export const PostTitle = styled.div`
  width: 62%;
`;
export const PostWriter = styled.div`
  width: 15%;
`;
export const PostDate = styled.div`
  width: 15%;
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
export const Icon = styled.img`
  max-width: 100%;
  margin-right: 8px;
`;

export const MatchKeyword = styled.span`
  background: ${(props: MatchKeywordProps) =>
    props.isMatch ? "#85dfff" : "none"};
  color: ${(props: MatchKeywordProps) => (props.isMatch ? "#fff" : "none")};
`;
