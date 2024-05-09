import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./BoardWrite.style";
import UploadImage from "../../../commons/uploadImage/uploadImage.container";
import { v4 as uuidv4 } from "uuid";
import { useBoard } from "../../../commons/hooks/customs/useBoard";
import { useCheckedId } from "../../../commons/hooks/customs/useCheckedId";
import { useForm } from "react-hook-form";
import { useToggle } from "../../../commons/hooks/customs/useToggle";
import { useState } from "react";
import type { IBoardWriteProps } from "./BoardWrite.types";
import { useAuth } from "../../../commons/hooks/customs/useAuth";

export interface Iform {
  writer: string;
  password: string;
  title: string;
  contents: string;
  boardAddress: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
  youtubeUrl: string;
  images: string[];
}

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  useAuth();
  const { id } = useCheckedId("boardId");
  const { onClickWrite, onClickEdit, onChangePassword } = useBoard({
    boardId: id,
  });
  const [files, setFiles] = useState(["", "", ""]);

  const [isActive] = useToggle();
  const [isOpenModal, modalToggle] = useToggle();

  // 게시글 작성 안했을시 오류 보여주는 state
  const [Error] = useState("");

  const { register, handleSubmit } = useForm<Iform>({
    defaultValues: {
      writer: "",
      password: "",
      title: "",
      contents: "",
      boardAddress: {
        zipcode: "",
        address: "",
        addressDetail: "",
      },
      images: [...files],
    },
  });

  const onChangeFiles = (file: string, index: number): void => {
    // file값은 url값 index는 해당하는 number값.
    const newFiles = [...files];
    // newFiles = ["","",""]
    newFiles[index] = file;
    // newFiles = ["url","",""]
    setFiles(newFiles);
    // files === newFiles
  };

  return (
    <S.Wrapper>
      <S.BoardTitle>게시글 {props.isEdit ? "수정" : "등록"}</S.BoardTitle>

      <S.WriterSection>
        <S.HalfSection>
          <S.BoardLabel>작성자</S.BoardLabel>
          <S.BoardInput
            type="text"
            placeholder="작성자를 입력해주세요"
            {...register("writer")}
          />
          <S.Error>{Error}</S.Error>
        </S.HalfSection>

        <S.HalfSection>
          <S.BoardLabel>비밀번호</S.BoardLabel>
          <S.BoardInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
            onChange={onChangePassword}
          />
          <S.Error>{Error}</S.Error>
        </S.HalfSection>
      </S.WriterSection>

      <S.Section>
        <S.BoardLabel>제목</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title")}
        />
        <S.Error>{Error}</S.Error>
      </S.Section>

      <S.Section>
        <S.BoardLabel>내용</S.BoardLabel>
        <S.BoardContents
          id="title"
          placeholder="내용을 입력해주세요"
          {...register("contents")}
        ></S.BoardContents>
        <S.Error>{Error}</S.Error>
      </S.Section>

      <S.Section>
        <S.BoardLabel>주소</S.BoardLabel>
        <S.ZipCodeWrapper>
          <S.ZipCodeInput placeholder="07725" readOnly />
          <S.ZipCodeButton onClick={modalToggle}>
            우편번호 검색
            {/* 모달창의 state를 받아와서 true라면 모달창을 열어준다. */}
            {isOpenModal && (
              <Modal open={isOpenModal}>
                <DaumPostcodeEmbed
                  onComplete={modalToggle}
                  {...register("boardAddress.zipcode")}
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
        isActive={props.isEdit ? true : isActive}
        isEdit={props.isEdit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.RegistButton>
    </S.Wrapper>
  );
}
