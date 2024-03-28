import * as S from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(){

  return(
    <S.Wrapper>
      <S.UnderLine/>
      <S.CommentHeader>
        <S.CommentImg src="/images/icon_comment.png" alt="댓글 아이콘" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentHeader>
      <S.WriterInfo>
        <S.WriterInput type="text" placeholder="작성자"></S.WriterInput>
        <S.PasswordInput type="password" placeholder="비밀번호"></S.PasswordInput>
        <S.CommentRating>★ ★ ★ ★ ★</S.CommentRating>
      </S.WriterInfo>
      
      <S.CommentContainer>
        <S.CommentInput 
          maxLength={100} 
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.">
        </S.CommentInput>
        <S.RegisterWrapper>
          <S.CommentLength>100/200</S.CommentLength>
          <S.CommentButton>등록하기</S.CommentButton>
        </S.RegisterWrapper>
      </S.CommentContainer>
      
    </S.Wrapper>
  )
}