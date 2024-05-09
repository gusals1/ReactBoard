import { Modal } from "antd";
import { useMutationUploadFile } from "../mutations/useMutationUploadFile";
import { checkValidationImage } from "../../uploadImage/uploadImage.validation";
import { useRef } from "react";

export const useUploadFile = () => {
  const [uploadFile] = useMutationUploadFile();
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeUpload = async (): Promise<void> => {
    const file = e.target.files?.[0];

    const isValidation = checkValidationImage(file);
    if (!isValidation) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });

      props.onChangeFiles(result.data?.uploadFile.url ?? "", props.index);
      console.log(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickUpload,
    onChangeUpload,
  };
};
