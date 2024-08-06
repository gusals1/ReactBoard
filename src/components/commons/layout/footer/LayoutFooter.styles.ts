import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
`;

export const WrapSns = styled.div`
  max-width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bdbdbd;
  margin: 40px 0;
`;

export const SnsIcon = styled.img`
  display: block;
  max-width: 48px;
  cursor: pointer;
`;

export const CopyRight = styled.p`
  color: #bdbdbd;
  font-size: 18px;
`;
