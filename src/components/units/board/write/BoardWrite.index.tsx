import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./BoardWrite.style";
import { v4 as uuidv4 } from "uuid";
import { useBoard } from "../../../commons/hooks/customs/useBoard";
import { useCheckedId } from "../../../commons/hooks/customs/useCheckedId";
import { useForm } from "react-hook-form";
import { useToggle } from "../../../commons/hooks/customs/useToggle";
import { useEffect, useState } from "react";
import type { IBoardWriteProps, Iform } from "./BoardWrite.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { boardSchema } from "./BoardValidation";
import UploadImage from "../../../commons/uploadImage/uploadImage.index";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const { id } = useCheckedId("boardId");

  const [files, setFiles] = useState(["", "", ""]);
  const [isOpenModal, modalToggle] = useToggle();

  const { onClickWrite, onClickEdit, onChangePassword } = useBoard({
    boardId: id,
  });

  const { register, handleSubmit, setValue, formState } = useForm<Iform>({
    resolver: yupResolver(boardSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (props.data) {
      setValue("writer", props.data.fetchBoard.writer ?? "");
      setValue("title", props.data.fetchBoard.title ?? "");
      setValue("contents", props.data.fetchBoard.contents ?? "");
      setValue(
        "boardAddress.zipcode",
        props.data.fetchBoard.boardAddress?.zipcode ?? ""
      );
      setValue(
        "boardAddress.address",
        props.data.fetchBoard.boardAddress?.address ?? ""
      );
      setValue(
        "boardAddress.addressDetail",
        props.data.fetchBoard.boardAddress?.addressDetail ?? ""
      );
      setValue("images", props.data.fetchBoard.images ?? ["", "", ""]);
    }
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFiles([...images]);
  }, [props.data]);

  const onChangeFiles = (file: string, index: number): void => {
    // file값은 url값 index는 해당하는 number값.
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    setValue("images", newFiles);
  };

  return (
    <S.Wrapper>
      <S.BoardTitle>게시글 {props.isEdit ? "수정" : "등록"}</S.BoardTitle>

      <S.WriterSection>
        <S.HalfSection>
          <S.BoardLabel>작성자</S.BoardLabel>
          <S.BoardInput
            type="text"
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            placeholder="작성자를 입력해주세요"
            disabled={props.isEdit}
            {...register("writer")}
          />
          <S.Error>{formState.errors.writer?.message}</S.Error>
        </S.HalfSection>

        <S.HalfSection>
          <S.BoardLabel>비밀번호</S.BoardLabel>
          <S.BoardInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
            onChange={onChangePassword}
          />
          <S.Error>{formState.errors.password?.message}</S.Error>
        </S.HalfSection>
      </S.WriterSection>

      <S.Section>
        <S.BoardLabel>제목</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title")}
        />
        <S.Error>{formState.errors.title?.message}</S.Error>
      </S.Section>

      <S.Section>
        <S.BoardLabel>내용</S.BoardLabel>
        <S.BoardContents
          id="title"
          placeholder="내용을 입력해주세요"
          {...register("contents")}
        ></S.BoardContents>
        <S.Error>{formState.errors.contents?.message}</S.Error>
      </S.Section>

      <S.Section>
        <S.BoardLabel>주소</S.BoardLabel>
        <S.ZipCodeWrapper>
          <S.ZipCodeInput
            placeholder="07725"
            readOnly
            {...register("boardAddress.zipcode")}
          />
          <S.ZipCodeButton onClick={modalToggle}>
            우편번호 검색
            {/* 모달창의 state를 받아와서 true라면 모달창을 열어준다. */}
            {isOpenModal && (
              <Modal open={isOpenModal}>
                <DaumPostcodeEmbed
                  onComplete={(data) => {
                    setValue("boardAddress.zipcode", data.zonecode);
                    setValue("boardAddress.address", data.address);
                    modalToggle();
                  }}
                />
              </Modal>
            )}
          </S.ZipCodeButton>
        </S.ZipCodeWrapper>

        <S.Address readOnly {...register("boardAddress.address")} />
        <S.Address
          type="text"
          placeholder="상세주소를 입력해주세요"
          {...register("boardAddress.addressDetail")}
        />
      </S.Section>
      <S.Section>
        <S.BoardLabel>유튜브</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="링크를 복사해주세요"
          {...register("youtubeUrl")}
        />
      </S.Section>
      <S.Section>
        <S.BoardLabel>사진 첨부</S.BoardLabel>
        {/* 이미지 업로드 컴포넌트 분리 */}
        <S.ImageWrapper>
          {files.map((el, index) => (
            <UploadImage
              key={uuidv4()}
              files={el} // 여기로 들어온 el값은 ""값 기본값이기 때문에
              index={index}
              onChangeFiles={onChangeFiles}
            />
          ))}
        </S.ImageWrapper>
      </S.Section>

      <S.Section>
        <S.BoardLabel>메인 설정</S.BoardLabel>

        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>

        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.Section>
      <S.RegistButton
        onClick={handleSubmit(props.isEdit ? onClickEdit : onClickWrite)}
        isEdit={props.isEdit}
        isValid={formState.isValid}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.RegistButton>
    </S.Wrapper>
  );
}
