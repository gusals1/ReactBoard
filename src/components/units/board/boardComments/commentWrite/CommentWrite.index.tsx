import { useForm } from "react-hook-form";
import type { IBoardComment } from "../../../../../commons/types/generated/types";
import { useBoardComment } from "../../../../commons/hooks/customs/useBoardComments";
import * as S from "./CommentWrite.styles";
import { Rate } from "antd";
import { type ChangeEvent, useState } from "react";

//
interface ICommentWriteProps {
  isEdit?: boolean;
  toggleEdit?: () => void;
  el?: IBoardComment;
  id?: string;
}

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  // 별점 관리용 state
  const [rating, setRating] = useState(0);
  const [contentLength, setContentLength] = useState(0);
  // 댓글 등록, 수정 mutation 댓글 등록시에는 boardId 수정시에는 commentId 사용
  const { onClickCommentRegister, onClickUpdateComment } = useBoardComment({
    boardId: props.id ?? "",
    boardCommentId: props.el?._id,
    toggleEdit: props.toggleEdit,
    rating,
  });

  // register로 데이터를 담아주고 등록 함수는 handleSubmit으로 감싸준다
  const { register, handleSubmit } = useForm({
    // 기본값 설정 ( props.data가 있을때만)
    defaultValues: {
      writer: props.el?.writer ?? "",
      password: "",
      contents: props.el?.contents ?? "",
      rating: props.el?.rating ?? "",
    },
  });

  /** content의 현재 글자 수를 표시하기 위한 onChange 함수 */
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContentLength(e.target.value.length);
  };

  return (
    <S.Wrapper>
      {/* 수정하기에는 댓글 부분이 필요없으니 조건문 달아줌 */}
      {!props.isEdit && (
        <S.CommentHeader>
          <S.CommentImg src="/images/icon_comment.png" alt="댓글 아이콘" />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentHeader>
      )}
      <S.WriterInfo>
        <S.WriterInput
          type="text"
          placeholder="작성자"
          {...register("writer")}
          readOnly={props.isEdit}
        ></S.WriterInput>
        <S.PasswordInput
          type="password"
          placeholder="비밀번호"
          {...register("password")}
        ></S.PasswordInput>

        <Rate
          allowHalf
          defaultValue={props.isEdit ? props.el?.rating : 0}
          onChange={setRating}
        />
      </S.WriterInfo>

      <S.CommentContainer>
        <S.CommentInput
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...register("contents")}
          onChange={onChangeContents}
        ></S.CommentInput>
        <S.RegisterWrapper>
          <S.CommentLength>{contentLength}/100</S.CommentLength>
          <S.CommentButton
            onClick={handleSubmit(
              props.isEdit ? onClickUpdateComment : onClickCommentRegister
            )}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.CommentButton>
        </S.RegisterWrapper>
      </S.CommentContainer>
    </S.Wrapper>
  );
}
