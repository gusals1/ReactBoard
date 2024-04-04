import * as S from "./BoardWrite.style";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <S.Wrapper>
      {/* 
        header부분에는 이미지 슬라이더와 탭이 들어가게 됨.
        그래서 main 영역부터 작성하기
      */}
      <S.Main>
        <S.BoardTitle>게시글 {props.isEdit ? "수정" : "등록"}</S.BoardTitle>

        <S.WriterSection>
          <S.FormSectionHalf>
            <S.BoardLabel htmlFor="writer">작성자</S.BoardLabel>
            <S.BoardInput
              type="text"
              id="writer"
              placeholder="작성자를 입력해주세요"
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              disabled={!!props.data?.fetchBoard.writer}
            />
            <S.Error>{props.writerError}</S.Error>
          </S.FormSectionHalf>
          <S.FormSectionHalf>
            <S.BoardLabel htmlFor="pw">비밀번호</S.BoardLabel>
            <S.BoardInput
              type="password"
              id="pw"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.FormSectionHalf>
        </S.WriterSection>

        <S.FormSection>
          <S.BoardLabel htmlFor="title">제목</S.BoardLabel>
          <S.BoardInput
            type="text"
            id="title"
            placeholder="제목을 입력해주세요"
            onChange={props.onChangeTitle}
            defaultValue={props.data ? props.data.fetchBoard.title : ""}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.FormSection>

        <S.FormSection>
          <S.BoardLabel htmlFor="contents">내용</S.BoardLabel>
          <S.BoardContents
            id="title"
            placeholder="내용을 입력해주세요"
            onChange={props.onChangeContents}
            defaultValue={props.data ? props.data.fetchBoard.contents : ""}
          ></S.BoardContents>
          <S.Error>{props.contentsError}</S.Error>
        </S.FormSection>
        <S.FormSection>
          <S.BoardLabel htmlFor="address">주소</S.BoardLabel>
          <S.ZipCodeWrapper>
            <S.ZipCodeInput placeholder="07725" />
            <S.ZipCodeButton>우편번호 검색</S.ZipCodeButton>
          </S.ZipCodeWrapper>
          <S.Address />
          <S.Address />
        </S.FormSection>
        <S.FormSection>
          <S.BoardLabel htmlFor="youtubeLink">유튜브</S.BoardLabel>
          <S.BoardInput
            type="text"
            id="youtubeLink"
            placeholder="링크를 복사해주세요"
            onChange={props.onChangeYoutubeUrl}
          />
        </S.FormSection>
        <S.FormSection>
          <S.BoardLabel>사진 첨부</S.BoardLabel>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
          <S.UploadButton>+</S.UploadButton>
        </S.FormSection>
        <S.FormSection>
          <S.BoardLabel>메인 설정</S.BoardLabel>
          <S.RadioButton type="radio" id="youtube" name="radio-button" />
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioButton type="radio" id="image" name="radio-button" />
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.FormSection>
        <S.RegistButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
          isEdit={props.isEdit}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.RegistButton>
      </S.Main>
    </S.Wrapper>
  );
}
