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
  // 댓글 목록, 하나의 컴포넌트로 분리해서 수정 삭제를 간편하게함.
  // ==> 수정하기를 누르면 컴포넌트의 형태도 바껴야하기 때문
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  /** 모달창 토글 */
  const ModalToggle = (): void => {
    setOpenDeleteModal((prev) => !prev);
  };
  // 댓글 삭제 mutation
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  /** 댓글 삭제 함수
      휴지통 아이콘 클릭하면 onClickDeleteModal 실행
      모달창 ok버튼을 누르면 이 함수 실행 모달창의 password값을 넣고 mutation 실행
   */
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
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickDeleteModal = (): void => {
    ModalToggle();
  };
  /** 모달에서 비밀번호 입력하는값을 password에 넣어서 비밀번호와 동일한지 확인 */
  const onChangeModalPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  /** 수정하면 state를 변경해 컴포넌트 바꾸기 */
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
