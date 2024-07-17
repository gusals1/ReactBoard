import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: 400;
  text-align: center;
  margin: 100px 0 45px;
`;

export const LoginCard = styled.div`
  width: 500px;
  margin: auto;
  background: #eee;
  padding: 20px;
  border-radius: 10px;
`;

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;
export const InputRow = styled.input`
  width: 100%;
  outline: none;
  padding: 14px 17px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #85dfff;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
  cursor: pointer;
`;

export const Contour = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 30px 0;
`;

export const Account = styled.p`
  text-align: center;
`;
export const SignUp = styled.span`
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;
