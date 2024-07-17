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
  // router.query를 hooks 패턴으로 분리한것. ("id") 값에 해당하는 값을 가져옴 (여기서는 board라서 boardId)
  const { id } = useCheckedId("boardId");

  // 게시글 등록, 수정을 분기할때 사용하는 recoil state를 가져와서 사용( 이 값은 상위 파일에서 변경됨.)
  const [isEdit] = useRecoilState(isEditState);

  // files => input type = files로 받은 이미지를 저장하는 state
  const [files, setFiles] = useState<File[]>([]);

  // 임시 URL값을 저장하는 state
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  // toggle같은 Modal을 통합적으로 관리하기 위해 만들어놓은 hooks []안에 이름은 내가 원하는대로 설정 가능
  const [isOpenModal, modalToggle] = useToggle();

  // useForm을 사용한다 type은 Iform에 저장되어있고 {}안에 기능을 가져와 사용한다
  const { register, handleSubmit, setValue, formState } = useForm<Iform>({
    resolver: yupResolver(boardSchema), // 유효성 검증을 할때 boardSchema에 따라서 검증한다.
    mode: "onChange",
  });

  // useBoard의 {}기능을 가져온다 useBoard를 선언할때 필요한 값을({ boardId... })안에 넣어준다
  const { onClickWrite, onClickEdit, onChangePassword } = useBoard({
    boardId: id,
    setValue,
    files,
    imageUrls,
  });

  /*
    useEffect() 페이지가 처음 그려질때, 변경될때 사라질때 동작한다
    props.data => 수정하기 페이지에서는 fetchBoard한 데이터를 가져오기 때문에 수정하기 페이지에서만 동작
   */
  useEffect(() => {
    if (props.data) {
      // fetch한 데이터를 받아오면 setValue로 useForm에 들어가는 값에 채워넣어준다. 없다면 ""값
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
      // fetch한 데이터에서 이미지 배열을 순회한다.
      props.data.fetchBoard.images?.forEach((image, index) => {
        if (index < newImageUrls.length) {
          // index가 처음 복사한 newImage보다 작으면 == 받아온 이미지가 아직 남아있다면
          // 그 이미지를 newImageUrls에 넣어준다. ["","",""]에서 ["codecamp-file-storage/2024/6/18/1.jpg","codecamp-file-storage/2024/6/18/키보드.jpg",""]
          newImageUrls[index] = image;
        }
      });
      // 이 값을 imageUrl과 setValue("images")에 넣어준다
      setImageUrls(newImageUrls);
      setValue("images", newImageUrls);
    }
  }, [props.data]);

  /** UploadImage 컴포넌트에 props로 넘겨서 이미지 파일과 임시 url값을 file state와 url state에 저장하기 위한 함수
   *  file = input type file의 값 // imageUrl = 임시 URL값 // index = 컴포넌트를 map함수로 넘겨줄때의 index값
   */
  const onChangeFiles = async (
    file: File,
    imageUrl: string,
    index: number
  ): Promise<void> => {
    // file값은 url값 index는 해당하는 number값.
    try {
      const tempUrls = [...imageUrls]; // 빈 state를 복사
      tempUrls[index] = imageUrl; // 복사한 배열에 index에 url값을 저장
      setImageUrls(tempUrls); // 그 값을 다시 imageUrl state에 저장

      const tempFiles = [...files]; // 빈 File타입 배열 복사
      tempFiles[index] = file; // 복사한 배열에 input files로 받아온 파일 데이터 저장
      await new Promise((resolve) => {
        setFiles(tempFiles); // 이 위에 요청이 다 완료되면 upload할 파일을 file state에 저장
        resolve(true);
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message); // 에러처리
    }
  };

  return (
    <S.Wrapper>
      <S.BoardTitle>게시글 {isEdit ? "수정" : "등록"}</S.BoardTitle>
      <S.WriterSection>
        <S.HalfSection>
          {/* writer */}
          <S.BoardLabel>작성자</S.BoardLabel>
          <S.BoardInput
            type="text"
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            placeholder="작성자를 입력해주세요"
            disabled={isEdit}
            // useForm의 writer에 바인딩
            {...register("writer")} // useForm의 ""라는 항목에 데이터를 바인딩 해준다.
          />
          {/* 오류 메세지를 formState로 출력 */}
          <S.Error>{formState.errors.writer?.message}</S.Error>
        </S.HalfSection>

        <S.HalfSection>
          {/* password */}
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
        {/* title */}
        <S.BoardLabel>제목</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="제목을 입력해주세요"
          {...register("title")}
        />
        <S.Error>{formState.errors.title?.message}</S.Error>
      </S.Section>

      <S.Section>
        {/* contents */}
        <S.BoardLabel>내용</S.BoardLabel>
        <S.BoardContents
          id="title"
          placeholder="내용을 입력해주세요"
          {...register("contents")}
        ></S.BoardContents>
        <S.Error>{formState.errors.contents?.message}</S.Error>
      </S.Section>

      <S.Section>
        {/* address(Modal) */}
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
                    // 모달창의 완료 버튼 클릭시 setValue로 주소 데이터를 넣고 닫아준다
                    // *** 완료 버튼시 수행하는 것은 함수기 때문에 register가 아니라 setValue를 사용해준다.
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
        {/* youtube Link */}
        <S.BoardLabel>유튜브</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="링크를 복사해주세요"
          {...register("youtubeUrl")}
        />
      </S.Section>
      <S.Section>
        {/* Image */}
        <S.BoardLabel>사진 첨부</S.BoardLabel>
        {/* 이미지 업로드 컴포넌트 분리 */}
        <S.ImageWrapper>
          {imageUrls.map((el, index) => (
            // imageUrl = ["","",""]을 가지고 반복해 컴포넌트를 생성한다.
            <UploadImage
              key={uuidv4()}
              imageUrl={el} // 빈 이미지 배열(string 타입)
              index={index} // imageUrls의 index (몇번째 컴포넌트에 이미지가 들어왔는지 확인하기 위한 index)
              onChangeFiles={onChangeFiles} // 파일을 받아서 배열에 저장하기 위한 onChange함수를 내려보내줌
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
        // isEdit에 따라서 클릭시 동작하는 함수를 바꿔준다
        onClick={handleSubmit(isEdit ? onClickEdit : onClickWrite)}
        isEdit={isEdit} // style 변경용 props를 넘겨준다
        isValid={formState.isValid} // 유효성에 따라서 버튼의 상태를 변경해줌
      >
        {isEdit ? "수정" : "등록"}하기
      </S.RegistButton>
    </S.Wrapper>
  );
}
