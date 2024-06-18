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
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";

export default function BoardWrite(props: IBoardWriteProps): JSX.Element {
  const { id } = useCheckedId("boardId");
  const [isEdit] = useRecoilState(isEditState);
  // files ==> 파일 선택할때 이미지에 대한 정보는 files로 들어온다
  // 아마 files를 map으로 돌려서 promise All을 하면 결과값으로 string이 나올텐데 그 값을
  const [files, setFiles] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [isOpenModal, modalToggle] = useToggle();

  const { register, handleSubmit, setValue, formState } = useForm<Iform>({
    resolver: yupResolver(boardSchema),
    mode: "onChange",
  });

  const { onClickWrite, onClickEdit, onChangePassword } = useBoard({
    boardId: id,
    setValue,
    files,
    imageUrls,
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
      const newImageUrls = [...imageUrls]; // 기존 배열을 복사합니다.["","",""]

      props.data.fetchBoard.images?.forEach((image, index) => {
        // fetch한 이미지를 반복해서 꺼내온다.
        if (index < newImageUrls.length) {
          // 각각의 upload된 이미지 배열이 newImageUrl에 들어가게 된다.
          newImageUrls[index] = image;
        }
      });
      // 그 값을 넣어서 반환 ==> ["","",""]에서 ["codecamp-file-storage/2024/6/18/1.jpg","codecamp-file-storage/2024/6/18/키보드.jpg",""]
      // 이렇게 된것을 반환
      setImageUrls(newImageUrls);
      // setValue한 이미지에도 이 값을 넣어준다.
      setValue("images", newImageUrls);
    }
  }, [props.data]);

  // files나 setValue가 일어날때마다 setValue("images",files)를 실행시켜서 값을 넣어줌.

  const onChangeFiles = async (
    file: File,
    imageUrl: string,
    index: number
  ): Promise<void> => {
    // file값은 url값 index는 해당하는 number값.
    try {
      const tempUrls = [...imageUrls];
      tempUrls[index] = imageUrl;
      setImageUrls(tempUrls);

      const tempFiles = [...files];
      tempFiles[index] = file;
      await new Promise((resolve) => {
        setFiles(tempFiles);
        resolve(true);
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <S.Wrapper>
      <S.BoardTitle>게시글 {isEdit ? "수정" : "등록"}</S.BoardTitle>

      <S.WriterSection>
        <S.HalfSection>
          <S.BoardLabel>작성자</S.BoardLabel>
          <S.BoardInput
            type="text"
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            placeholder="작성자를 입력해주세요"
            disabled={isEdit}
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
          {imageUrls.map((el, index) => (
            <UploadImage
              key={uuidv4()}
              imageUrl={el} // 빈 이미지 배열(string 타입)
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
        onClick={handleSubmit(isEdit ? onClickEdit : onClickWrite)}
        isEdit={isEdit}
        isValid={formState.isValid}
      >
        {isEdit ? "수정" : "등록"}하기
      </S.RegistButton>
    </S.Wrapper>
  );
}
