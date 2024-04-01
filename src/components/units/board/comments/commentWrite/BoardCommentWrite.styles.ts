import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;
`;
export const UnderLine = styled.div`
  height:1px;
  background: #BDBDBD;
`

export const CommentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  align-items: flex-end;
`

export const CommentImg = styled.img`
  max-width: 20px;
`
export const CommentTitle = styled.h3`
  font-size: 18px;
  margin-left: 12px;
`

export const WriterInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`
export const WriterInput = styled.input`
  width: 100px;
  text-indent: 16px;
  height: 40px;
  outline: none;
`
export const PasswordInput = styled.input`
  width: 140px;
  text-indent: 16px;
  height: 40px;
  outline: none;
`
export const CommentRating = styled.div`
  margin-bottom: 20px;
`

export const CommentContainer = styled.div`
  width: 100%;
  border: 1px solid #BDBDBD;
  margin-bottom: 40px;
`

export const CommentInput = styled.textarea`
  width: 100%;
  height: 110px;
  border: none;
  outline: none;
  padding: 20px;
  resize: none;
`
export const RegisterWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const CommentLength = styled.p`
  margin-left: 20px;
  color: #BDBDBD;
`
export const CommentButton = styled.button`
  width: 91px;
  height: 52px;
  background: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`