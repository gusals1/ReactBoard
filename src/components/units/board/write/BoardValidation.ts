import * as yup from "yup";

export const boardSchema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요"),
  password: yup
    .string()
    .min(4, "비밀번호는 4~15자리로 입력해주세요")
    .max(15, "비밀번호는 4~15자리로 입력해주세요")
    .required(),
  title: yup.string().required("제목을 입력해주세요"),
  contents: yup.string().required("내용을 입력해주세요"),
});
