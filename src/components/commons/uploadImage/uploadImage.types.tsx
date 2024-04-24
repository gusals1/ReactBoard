import type { ChangeEvent, RefObject } from "react";

export interface IUploadImageProps {
  index: number;
  files: string;
  onChangeFiles: (file: string, index: number) => void;
}

export interface IUploadImageUIProps {
  files: string;
  fileRef: RefObject<HTMLInputElement>;
  onChangeUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUpload: () => void;
}
