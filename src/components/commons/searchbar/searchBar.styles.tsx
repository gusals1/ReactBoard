import styled from "@emotion/styled";

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
