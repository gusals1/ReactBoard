import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 300px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const InputName = styled.label`
  font-size: 18px;
  font-weight: bold;
`;
export const InputText = styled.input`
  width: 70%;
  display: block;
  height: 35px;
  outline: none;
  padding: 10px;
`;
export const Register = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background-color: #85dfff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;
