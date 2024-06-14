import { useRef } from "react";
import type { ChangeEvent } from "react";
import { FileHidden, UploadButton, UploadImageBox } from "./uploadImage.styles";
import { checkValidationImage } from "./uploadImage.validation";
import { Modal } from "antd";
import { useMutationUploadFile } from "../hooks/mutations/useMutationUploadFile";

interface IUploadImageProps {
  files: string;
  index: number;
  onChangeFiles: (file: string, index: number) => void;
  // onChangeFiles: (imageUrl: string, file: File, index: number) => void;
}

export default function UploadImage(props: IUploadImageProps): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutationUploadFile();

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

      props.onChangeFiles(result.data?.uploadFile.url ?? "", props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    // try {
    //   if (file === undefined) return;
    //   const fileReader = new FileReader();
    //   fileReader.readAsDataURL(file);
    //   fileReader.onload = (e) => {
    //     if (typeof e.target?.result === "string") {
    //       props.onChangeFiles(e.target?.result, file, props.index);
    //     }
    //   };
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }
  };

  return (
    <>
      {props.files !== "" ? (
        <UploadImageBox
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.files}`}
          // src={
          //   !props.isEdit
          //     ? props.imageUrls
          //     : `https://storage.googleapis.com/${props.files}`
          // }
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
