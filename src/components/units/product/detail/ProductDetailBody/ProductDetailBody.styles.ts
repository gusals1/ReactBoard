import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
`;
export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TitleInner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LikeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LikeIcon = styled.img`
  max-width: 36px;
`;
export const LikeCount = styled.p`
  font-weight: bold;
`;

export const ProductRemarks = styled.p`
  font-size: 18px;
  color: #bdbdbd;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #4f4f4f;
  margin-top: 4px;
`;
export const ProductPrice = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProductImage = styled.img`
  width: 50%;
  height: auto;
  margin: auto;
`;

export const ProductContents = styled.div`
  margin-top: 80px;
`;
export const ProductTags = styled.p`
  font-size: 16px;
  margin-top: 40px;
  color: #bdbdbd;
  font-style: italic;
`;
export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ddd;
  box-shadow: 0px 0px 1px #ccc;
  margin: 40px 0;
`;
