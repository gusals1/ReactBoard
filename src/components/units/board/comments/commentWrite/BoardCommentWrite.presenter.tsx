import * as S from "./BoardCommentWrite.styles";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI(
  props: IBoardCommentWriteUIProps
): JSX.Element {
  return (
    <S.Wrapper>
      <S.UnderLine />
      <S.CommentHeader>
        <S.CommentImg src="/images/icon_comment.png" alt="댓글 아이콘" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentHeader>
      <S.WriterInfo>
        <S.WriterInput
          type="text"
          placeholder="작성자"
          onChange={props.onChangeCommentWriter}
        ></S.WriterInput>
        <S.PasswordInput
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeCommentPassword}
        ></S.PasswordInput>

        <Rate
          allowHalf
          defaultValue={0}
          onChange={props.onChangeCommentRating}
        />
      </S.WriterInfo>

      <S.CommentContainer>
        <S.CommentInput
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeCommentContents}
        ></S.CommentInput>
        <S.RegisterWrapper>
          <S.CommentLength>{props.commentContents.length}/100</S.CommentLength>
          <S.CommentButton onClick={props.onClickCommentRegister}>
            등록하기
          </S.CommentButton>
        </S.RegisterWrapper>
      </S.CommentContainer>
    </S.Wrapper>
  );
}
