import styled from "@emotion/styled"

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto 100px;
`
export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid #BDBDBD;
  margin-bottom: 20px;
`
export const Profile = styled.img`
  max-width: 100%;
`
export const Comment = styled.div`
  flex-grow: 5;
`
export const EditIconBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
`
export const EditIcon = styled.img`
  max-width: 100%;
  margin: 3px;
  height: 18px;
  cursor: pointer;
`
export const DeleteIcon = styled.img`
  max-width: 100%;
  margin: 3px;
  height: 18px;
  cursor: pointer;
`
export const WriterWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 27px;
`
export const CommentWriter = styled.div`
  font-weight: bold;
  margin-right: 10px;
`
export const CommentRating = styled.div`
  font-weight: bold;
`
export const CommentContents = styled.p`
  font-size: 16px;
  margin-top: 2px;
  color: #4f4f4f;
  height: 24px;
`
export const CommentCreatedAt = styled.p`
  font-size: 12px;
  margin-top: 20px;
  height: 24px;
  color: #bdbdbd;
`