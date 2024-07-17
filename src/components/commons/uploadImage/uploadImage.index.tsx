import { useRef } from "react";
import type { ChangeEvent } from "react";
import { FileHidden, UploadButton, UploadImageBox } from "./uploadImage.styles";
import { checkValidationImage } from "./uploadImage.validation";
import { Modal } from "antd";

interface IUploadImageProps {
  imageUrl: string;
  index: number;
  onChangeFiles: (file: File, imageUrl: string, index: number) => void;
}

export default function UploadImage(props: IUploadImageProps): JSX.Element {
  /* 이미지 업로드 컴포넌트 props로 
    imageUrl => 이미지 배열 데이터
    index => 해당하는 컴포넌트의 index번호
    onChangeFiles => 이미지가 추가되면 배열을 복사해 추가하는 함수
  */

  // html 요소를 서로 연결하기 위해 사용
  const fileRef = useRef<HTMLInputElement>(null);
  /** 이미지 컴포넌트 클릭하면 fileRef로 연결시킨 FileHidden이 클릭된것 처럼 만든다. */
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  /** input type = "file"은 데이터를 file 타입으로 받는다
   *  파일 선택을 누르면 e.target.files에 값이 들어오니 이걸 file에 담아서 onChangeFiles에 인수로 넣어준다
   */
  const onChangeUpload = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (typeof file === "undefined") return;
    const isValidation = checkValidationImage(file);
    if (!isValidation) return;

    try {
      // file로 들어온 이미지 데이터를 가지고 임시 URL 만들기
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          // file타입 데이터와 임시 URL 해당 컴포넌트의 index를 인자로 준다
          props.onChangeFiles(file, event.target?.result, props.index);
        }
      };
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {props.imageUrl !== "" ? (
        <UploadImageBox
          onClick={onClickUpload}
          src={
            // 업로드한 이미지 데이터는 codecamp를 포함하기 때문에 문자열을 포함하고 있으면 google storage에 접근한다
            props.imageUrl.includes("codecamp")
              ? `https://storage.googleapis.com/${props.imageUrl}`
              : props.imageUrl
          }
        />
      ) : (
        <UploadButton onClick={onClickUpload}>
          <>+</>
        </UploadButton>
      )}

      <FileHidden type="file" ref={fileRef} onChange={onChangeUpload} />
    </>
  );
}
