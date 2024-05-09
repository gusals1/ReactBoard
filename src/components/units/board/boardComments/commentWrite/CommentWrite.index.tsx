import { useForm } from "react-hook-form";
import type { IBoardComment } from "../../../../../commons/types/generated/types";
import { useBoardComment } from "../../../../commons/hooks/customs/useBoardComments";
import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import * as S from "./CommentWrite.styles";
import { Rate } from "antd";

interface ICommentWriteProps {
  isEdit?: boolean;
  toggleEdit?: () => void;
  el?: IBoardComment;
}

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
  const { id } = useCheckedId("boardId");

  const { onClickCommentRegister, onClickUpdateComment } = useBoardComment({
    boardId: id,
    boardCommentId: props.el?._id,
    toggleEdit: props.toggleEdit,
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      writer: props.el?.writer ?? "",
      password: "",
      contents: props.el?.contents ?? "",
      rating: 0,
    },
  });

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
          // {...register("rating")}
        />
      </S.WriterInfo>

      <S.CommentContainer>
        <S.CommentInput
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          {...register("contents")}
        ></S.CommentInput>
        <S.RegisterWrapper>
          <S.CommentLength>0/100</S.CommentLength>
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
