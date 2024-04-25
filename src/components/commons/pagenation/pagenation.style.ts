import styled from "@emotion/styled";

interface IPagenationProps {
  isActive: boolean;
}
export const PageNumWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  line-height: 50px;
`;

export const PageNum = styled.p`
  margin: 0 8px;
  cursor: pointer;
  font-weight: ${(props: IPagenationProps) =>
    props.isActive ? "bold" : "400"};
  color: ${(props: IPagenationProps) => (props.isActive ? "#35C5F0" : "#000")};
`;
export const PrevArrow = styled.p`
  margin-right: 10px;
`;
export const NextArrow = styled.p`
  margin-left: 10px;
`;
