import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: none;
`; // 전체를 감싸는 box의 style

export const Title = styled.h1`
  font-size: 36px;
  margin: 80px 0 40px;
  text-align: center;
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
  max-width: 150px;
  height: 50px;
  margin: 20px 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
