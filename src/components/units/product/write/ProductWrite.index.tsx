import * as S from "./ProductWrite.style";
import { v4 as uuidv4 } from "uuid";
import UploadImage from "../../../commons/uploadImage/uploadImage.index";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../commons/hooks/customs/useAuth";
import type { IProductWriteProps } from "./ProductWrite.types";
import { useProduct } from "../../../commons/hooks/customs/useProduct";

export interface IUseditemForm {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string[];
  images?: string[];
}
declare const window: typeof globalThis & {
  kakao: any;
};

export default function ProductWrite(props: IProductWriteProps): JSX.Element {
  useAuth();
  const { onClickUseditem, onClickUpdateItem } = useProduct();

  const [files, setFiles] = useState(["", "", ""]);

  const onChangeFiles = (file: string, index: number): void => {
    // file값은 url값 index는 해당하는 number값.
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    setValue("images", newFiles);
  };
  // ------------------------------------------------------------------------------

  const { register, handleSubmit, setValue } = useForm<IUseditemForm>({
    mode: "onSubmit",
  });

  useEffect(() => {
    if (props.data) {
      setValue("name", props.data?.fetchUseditem.name ?? "");
      setValue("remarks", props.data?.fetchUseditem.remarks ?? "");
      setValue("contents", props.data?.fetchUseditem.contents ?? "");
      setValue("price", Number(props.data?.fetchUseditem.price) ?? 0);
      setValue("tags", props.data?.fetchUseditem.tags ?? [""]);
      const images = props.data?.fetchUseditem.images;
      if (images !== undefined && images !== null) setFiles([...images]);
    }
  }, [props.data]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0f1c57c699441fa8d38826a9465589fd";
    // head 태그안에 추가
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // console.log(map);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <S.Wrapper>
      <S.BoardTitle>상품{props.isEdit ? "수정" : "등록"}</S.BoardTitle>

      <S.Section>
        {/* name */}
        <S.BoardLabel>상품명</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="상품 이름을 입력해주세요"
          {...register("name")}
        />
      </S.Section>
      <S.Section>
        {/* remark */}
        <S.BoardLabel>한줄요약</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="상품에 대한 간단한 설명을 입력해주세요"
          {...register("remarks")}
        />
      </S.Section>

      <S.Section>
        {/* contents */}
        <S.BoardLabel>상품설명</S.BoardLabel>
        <S.BoardContents
          placeholder="내용을 입력해주세요"
          {...register("contents")}
        ></S.BoardContents>
      </S.Section>
      <S.Section>
        {/* price */}
        <S.BoardLabel>가격</S.BoardLabel>
        <S.BoardInput
          type="number"
          placeholder="가격을 입력해주세요"
          {...register("price")}
        />
      </S.Section>
      <S.Section>
        {/* tag */}
        <S.BoardLabel>태그입력</S.BoardLabel>
        <S.BoardInput
          type="text"
          placeholder="#태그 #태그 #태그..."
          {...register("tags")}
        />
      </S.Section>
      {/* 지도 들어갈 부분 */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
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
        onClick={handleSubmit(
          props.isEdit ? onClickUpdateItem : onClickUseditem
        )}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.RegistButton>
    </S.Wrapper>
  );
}
