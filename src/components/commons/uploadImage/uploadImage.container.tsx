import { useMutation } from "@apollo/client";
import UploadImageUI from "./uploadImage.presenter";
import { UPLOAD_FILE } from "./uploadImage.queries";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import type { IUploadImageProps } from "./uploadImage.types";
import { checkValidationImage } from "./uploadImage.validation";
import { Modal } from "antd";

export default function UploadImage(props: IUploadImageProps): JSX.Element {
  const [uploadFile] = useMutation(UPLOAD_FILE);
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
      const result = await uploadFile({
        variables: { file },
      });
      props.onChangeFiles(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadImageUI
      files={props.files}
      fileRef={fileRef}
      onClickUpload={onClickUpload}
      onChangeUpload={onChangeUpload}
    />
  );
}
