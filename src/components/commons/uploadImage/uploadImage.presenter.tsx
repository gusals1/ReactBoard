import { FileHidden, UploadButton, UploadImage } from "./uploadImage.styles";
import type { IUploadImageUIProps } from "./uploadImage.types";

export default function UploadImageUI(props: IUploadImageUIProps): JSX.Element {
  return (
    <>
      {props.files !== "" ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.files}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
        </UploadButton>
      )}

      <FileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeUpload}
      />
    </>
  );
}
