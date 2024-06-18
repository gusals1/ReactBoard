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
  const fileRef = useRef<HTMLInputElement>(null);

  /** 이미지 컴포넌트 클릭하면 fileRef로 연결시킨 FileHidden이 클릭된것 처럼 만든다. */
  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  /** input type = "file"은 데이터를 file 타입으로 받는다
   *  파일 선택 event로 데이터가 들어오면 배열의 [0]번째 요소를 가져와 file에 저장한다.
   *  file === 이미지 파일에 대한 정보와 현재 클릭한 컴포넌트의 index를 onChangeFile 함수의 인수로 호출함.
   */
  const onChangeUpload = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (typeof file === "undefined") return;
    const isValidation = checkValidationImage(file);
    if (!isValidation) return;

    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
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
