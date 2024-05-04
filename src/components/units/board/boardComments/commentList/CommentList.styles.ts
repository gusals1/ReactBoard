import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;
export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Profile = styled.img`
  max-width: 100%;
`;
export const Comment = styled.div`
  flex-grow: 5;
`;
export const EditIconBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`;
export const EditIcon = styled.img`
  max-width: 100%;
  margin: 3px;
  height: 18px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  max-width: 100%;
  margin: 3px;
  height: 18px;
  cursor: pointer;
`;
export const WriterWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 27px;
`;
export const CommentWriter = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;
export const CommentRating = styled.div`
  font-weight: bold;
`;
export const CommentContents = styled.p`
  font-size: 16px;
  margin-top: 2px;
  color: #4f4f4f;
  height: 24px;
`;
export const CommentCreatedAt = styled.p`
  font-size: 12px;
  margin-top: 5px;
  height: 24px;
  color: #bdbdbd;
`;

export const InputModal = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  text-indent: 10px;
  margin: 10px 0;
`;
