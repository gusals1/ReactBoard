import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  overflow: hidden;
  box-shadow: 0px 0px 10px gray;
  padding: 80px 102px;
`;

export const ProdTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
`;

export const Section = styled.div`
  width: 100%;
`;

export const ProdLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const ProdInput = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  margin-bottom: 40px;
  outline: none;
  border: 1px solid #bdbdbd;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
  :focus {
    border: 2px solid lightblue;
  }
`;

export const ProdContents = styled.textarea`
  width: 100%;
  height: 480px;
  resize: none;
  padding: 16px;
  outline: none;
  border: 1px solid #bdbdbd;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #bdbdbd;
  }
  :focus {
    border: 2px solid lightblue;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  margin-bottom: 40px;
`;

export const RegistButton = styled.button`
  display: block;
  width: 180px;
  height: 52px;
  border: none;
  margin: 80px auto 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const webEditor = {
  maxwidth: "100%",
  height: "300px",
};
