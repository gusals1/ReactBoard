import { getDate } from "../../../../commons/libraries/util";
import * as S from "./BoardCommentList.styles";

export default function BoardCommentListUI(props){
  return(
    <S.Wrapper>
      {
        props.data?.fetchBoardComments.map((el)=>(
          <S.CommentBox key={el._id}>
            <S.Profile src="/images/comment_profile.png" alt="profile_img" />
            <S.Comment>
              <S.WriterWrap>
                <S.CommentWriter>{el.writer}</S.CommentWriter>
                <S.CommentRating>★ ★ ★ ★ ★{el.rating}</S.CommentRating>
              </S.WriterWrap>
              
              <S.CommentContents>{el.contents}</S.CommentContents>
              <S.CommentCreatedAt>{getDate(el.createdAt)}</S.CommentCreatedAt>
            </S.Comment>
            <S.EditIconBox>
              <S.EditIcon src="/images/comment_edit.png" alt="edit" />
              <S.DeleteIcon src="/images/comment_delete.png" alt="delete" id={el._id} onClick={props.onClickCommentDelete}/>
            </S.EditIconBox>
          </S.CommentBox>
        ))
      
      }
      
    </S.Wrapper>
  )
}