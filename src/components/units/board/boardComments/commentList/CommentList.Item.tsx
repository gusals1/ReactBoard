import * as S from "./CommentList.styles";
import { getDate } from "../../../../../commons/libraries/util";
import { Modal, Rate } from "antd";
import { useToggle } from "../../../../commons/hooks/customs/useToggle";
import { useBoardComment } from "../../../../commons/hooks/customs/useBoardComments";
import CommentWrite from "../commentWrite/CommentWrite.index";
import type { IBoardComment } from "../../../../../commons/types/generated/types";

interface ICommentListItemProps {
  el: IBoardComment;
  id: string;
}

export default function CommentListItem(
  props: ICommentListItemProps
): JSX.Element {
  // 댓글 목록, 하나의 컴포넌트로 분리해서 수정 삭제를 간편하게함.
  // ==> 수정하기를 누르면 컴포넌트의 형태도 바껴야하기 때문
  const [isEdit, toggleEdit] = useToggle(); // isEdit를 toggle로 조절
  const [openModal, toggleModal] = useToggle();

  // 댓글 삭제와 삭제할때 필요한 비밀번호를 인자로 함수를 가져옴
  const { onClickCommentDelete, onChangePassword } = useBoardComment({
    boardId: props.id,
    boardCommentId: props.el._id,
  });

  return (
    <>
      {openModal && ( // 모달이 열리면 비밀번호를 입력하고 일치하면 삭제완료
        <Modal
          title="비밀번호를 입력해주세요"
          onOk={onClickCommentDelete}
          onCancel={toggleModal}
          open={openModal}
        >
          <S.InputModal type="password" onChange={onChangePassword} />
        </Modal>
      )}
      {!isEdit ? ( // isEdit가 false === 수정 X
        <S.Wrapper>
          <S.CommentBox>
            <S.Profile src="/images/comment_profile.png" alt="profile_img" />
            <S.Comment>
              <S.WriterWrap>
                <S.CommentWriter>{props.el.writer}</S.CommentWriter>
                <Rate disabled value={props.el.rating} />
              </S.WriterWrap>
              <S.CommentContents>{props.el.contents}</S.CommentContents>
              <S.CommentCreatedAt>
                {getDate(props.el.createdAt)}
              </S.CommentCreatedAt>
            </S.Comment>
            <S.EditIconBox>
              <S.EditIcon
                src="/images/comment_edit.png"
                alt="edit"
                onClick={toggleEdit}
              />
              <S.DeleteIcon
                src="/images/comment_delete.png"
                alt="delete"
                id={props.el._id}
                onClick={toggleModal}
              />
            </S.EditIconBox>
          </S.CommentBox>
        </S.Wrapper>
      ) : (
        // isEdit === true => 댓글 입력 컴포넌트로 바꿔줌
        <CommentWrite isEdit={isEdit} toggleEdit={toggleEdit} el={props.el} />
      )}
    </>
  );
}
