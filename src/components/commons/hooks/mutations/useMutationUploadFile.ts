import { gql, useMutation } from "@apollo/client";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

// 이미지 업로드 API
export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

// 이미지 업로드 hooks(함수)
export const useMutationUploadFile = () => {
  const mutation = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  return mutation;
};
