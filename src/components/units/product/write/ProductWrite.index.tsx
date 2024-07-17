import * as S from "./ProductWrite.style";
import { v4 as uuidv4 } from "uuid";
import UploadImage from "../../../commons/uploadImage/uploadImage.index";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { IProductWriteProps, IUseditemForm } from "./ProductWrite.types";
import { useProduct } from "../../../commons/hooks/customs/useProduct";
import { useCheckedId } from "../../../commons/hooks/customs/useCheckedId";
import { isEditState } from "../../../commons/store";
import { useRecoilState } from "recoil";

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  // 상품 등록, 수정 분기할때 사용하는 global state
  const [isEdit] = useRecoilState(isEditState);

  const { id } = useCheckedId("useditemId");
  // files => input type = files로 받은 이미지를 저장하는 state
  const [files, setFiles] = useState<File[]>([]);
  // 임시 URL값을 저장하는 state
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  // setValue === useForm에 강제로 데이터를 넣어줄때 사용
  const { register, handleSubmit, setValue } = useForm<IUseditemForm>({
    mode: "onChange",
  });

  // useProduct ==> 상품 등록에 관한 API hooks
  const { onClickUseditem, onClickUpdateItem } = useProduct({
    useditemId: id,
    setValue,
    files,
    imageUrls,
  });

  // 브라우저가 처음 그려질때 props.data가 있다면 그 값을 useForm 값에 넣어준다(수정할 데이터를 불러오기 위해서)
  useEffect(() => {
    if (props.data) {
      setValue("name", props.data.fetchUseditem.name ?? "");
      setValue("remarks", props.data.fetchUseditem.remarks ?? "");
      setValue("contents", props.data.fetchUseditem.contents ?? "");
      setValue("tags", props.data.fetchUseditem.tags ?? [""]);
      setValue("price", props.data.fetchUseditem.price ?? 0);

      const newImageUrls = [...imageUrls]; // 기존 배열을 복사합니다.["","",""]

      props.data.fetchUseditem.images?.forEach((image, index) => {
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
  // ------------------------------------------------------------------------------

  return (
    <S.Wrapper>
      <S.ProdTitle>상품{isEdit ? "수정" : "등록"}</S.ProdTitle>

      <S.Section>
        {/* name */}
        <S.ProdLabel>상품명</S.ProdLabel>
        <S.ProdInput
          type="text"
          placeholder="상품 이름을 입력해주세요"
          {...register("name")}
        />

        {/* remark */}
        <S.ProdLabel>한줄요약</S.ProdLabel>
        <S.ProdInput
          type="text"
          placeholder="상품에 대한 간단한 설명을 입력해주세요"
          {...register("remarks")}
        />

        {/* contents */}
        <S.ProdLabel>상품설명</S.ProdLabel>
        <S.ProdContents
          id="title"
          placeholder="내용을 입력해주세요"
          {...register("contents")}
        ></S.ProdContents>

        {/* price */}
        <S.ProdLabel>가격</S.ProdLabel>
        <S.ProdInput
          type="number"
          placeholder="가격을 입력해주세요"
          {...register("price")}
        />

        {/* tag */}
        <S.ProdLabel>태그입력</S.ProdLabel>
        <S.ProdInput
          type="text"
          placeholder="#태그 #태그 #태그..."
          {...register("tags")}
        />

        <S.ProdLabel>사진 첨부</S.ProdLabel>
        {/* 이미지 업로드 컴포넌트 분리 */}
        <S.ImageWrapper>
          {imageUrls.map((el, index) => (
            <UploadImage
              key={uuidv4()}
              imageUrl={el} // 여기로 들어온 el값은 ""값 기본값이기 때문에
              index={index}
              onChangeFiles={onChangeFiles}
            />
          ))}
        </S.ImageWrapper>

        <S.RegistButton
          onClick={handleSubmit(isEdit ? onClickUpdateItem : onClickUseditem)}
        >
          {isEdit ? "수정" : "등록"}하기
        </S.RegistButton>
      </S.Section>
    </S.Wrapper>
  );
}
