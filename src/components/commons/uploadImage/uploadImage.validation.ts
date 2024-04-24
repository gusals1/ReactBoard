import { Modal } from "antd";

const FILE_SIZE_MAX = 5 * 1024 * 1024;

export function checkValidationImage(file?: File): boolean {
  if (file?.size === undefined) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }

  if (file.size > FILE_SIZE_MAX) {
    Modal.error({ content: "파일이 너무 큽니다" });
    return false;
  }

  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다.(png, jpeg)",
    });
    return false;
  }

  return true;
}
