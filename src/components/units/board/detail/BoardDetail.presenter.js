import { getDate } from "../../../commons/libraries/util"
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {

  return(
    <S.Wrapper>
      <S.Main>
        <S.MainHeader>
          <S.ProfileWrapper>
            <S.ProfileImage src='../../images/avatar.png'/>
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}aaa</S.Writer>
              <S.CreatedAt>{getDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
            </S.Info>
          </S.ProfileWrapper>
          <S.IconWrapper>
            <S.Clip src='/images/clip.png'/>
            <S.Location src='/images/location.png'/>
          </S.IconWrapper>
        </S.MainHeader>
        <S.UnderLine></S.UnderLine>
        <S.Body>
          <S.BoardTitle>{props.data?.fetchBoard?.title}</S.BoardTitle> 
          <S.BoardImage>{props.data?.fetchBoard?.image}</S.BoardImage>
          <S.BoardContents>{props.data?.fetchBoard?.contents}</S.BoardContents>
        </S.Body>
      </S.Main>
      <S.BottomWrapper>
        <S.Button>목록으로</S.Button>
        <S.Button>수정하기</S.Button>
        <S.Button >삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  )
}