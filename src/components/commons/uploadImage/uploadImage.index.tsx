import { useRef } from "react";
import type { ChangeEvent } from "react";
import { FileHidden, UploadButton, UploadImageBox } from "./uploadImage.styles";
import { checkValidationImage } from "./uploadImage.validation";
import { Modal } from "antd";

interface IUploadImageProps {
  imageUrl: string;
  index: number;
  files: File[];
  onChangeFiles: (file: File, index: number) => void;
}

export default function UploadImage(props: IUploadImageProps): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeUpload = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];

    const isValidation = checkValidationImage(file);
    if (!isValidation) return;

    try {
      if (typeof file === "undefined") return;
      props.onChangeFiles(file, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {props.imageUrl !== "" ? (
        <UploadImageBox onClick={onClickUpload} src={props.imageUrl} />
      ) : (
        <UploadButton onClick={onClickUpload}>
          <>+</>
        </UploadButton>
      )}

      <FileHidden type="file" ref={fileRef} onChange={onChangeUpload} />
    </>
  );
}
