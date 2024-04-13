import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import * as S from "./CommentList.styles";
import { getDate } from "../../../../../commons/libraries/util";
import { Modal, Rate } from "antd";
import BoardComment from "../commentWrite/CommentWrite.container";
import type { ChangeEvent, MouseEvent } from "react";
import type { ICommentListItemProps } from "./CommentList.types";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../../commons/types/generated/types";

export default function CommentListItem(
  props: ICommentListItemProps
): JSX.Element {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  /** 토글 기능이 여러번 사용되서 그냥 함수로 만들어 한번에 사용 */
  const ModalToggle = (): void => {
    setOpenDeleteModal((prev) => !prev);
  };

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickCommentDelete = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      ModalToggle(); // 모달창 꺼주기
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };
  /** 댓글의 삭제 아이콘을 클릭하면 함수 호출
   *  토글로 인해 open modal값이 true로 바뀌면서 모달창 나타남.
   *  댓글 클릭시 id에 el_id를 보내고있기 때문에 그 값을 boardId에 다시 넣어주기 위해 state생성
   */
  const onClickDeleteModal = (): void => {
    ModalToggle();
  };
  /** 모달에서 비밀번호 입력하는값을 password에 넣어서 비밀번호와 동일한지 확인 */
  const onChangeModalPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickUpdateComments = (): void => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      {openDeleteModal && (
        <Modal
          title="비밀번호를 입력해주세요"
          onOk={onClickCommentDelete}
          onCancel={ModalToggle}
          open={openDeleteModal}
        >
          <S.InputModal type="password" onChange={onChangeModalPassword} />
        </Modal>
      )}
      {!isEdit ? (
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
                onClick={onClickUpdateComments}
              />
              <S.DeleteIcon
                src="/images/comment_delete.png"
                alt="delete"
                id={props.el._id}
                onClick={onClickDeleteModal}
              />
            </S.EditIconBox>
          </S.CommentBox>
        </S.Wrapper>
      ) : (
        <BoardComment isEdit={isEdit} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
