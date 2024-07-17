import { Modal } from "antd";
import { useMutationCreateUseditem } from "../mutations/useMutationCreateUseditem";
import { useRouter } from "next/router";
import { useMutationUpdateUseditem } from "../mutations/useMutationUpdateUseditem";
import { useMutationDeleteUseditem } from "../mutations/useMutationDeleteUseditem";
import type { UseFormSetValue } from "react-hook-form";
import { useMutationUploadFile } from "../mutations/useMutationUploadFile";
import type { IUseditemForm } from "../../../units/product/write/ProductWrite.types";
import { FETCH_USEDITEM } from "../queries/useQueryFetchUsedItem";

// useProduct
interface IUseProductArgs {
  useditemId?: string;
  setValue?: UseFormSetValue<IUseditemForm> | undefined;
  files?: File[];
  imageUrls?: string[];
}
// 상품 수정시 사용하는 객체의 데이터 타입
interface IupdateUseditemInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string[];
  images?: string[];
}

export const useProduct = (args: IUseProductArgs) => {
  const uploadImages: string[] = [];
  const router = useRouter();
  const [uploadFile] = useMutationUploadFile();
  const [createUseditem] = useMutationCreateUseditem();
  const [updateUseditem] = useMutationUpdateUseditem();
  const [deleteUseditem] = useMutationDeleteUseditem();

  /** 상품 등록 함수 */
  const onClickUseditem = async (data: IUseditemForm): Promise<void> => {
    if (!args.files || !args.setValue) return;
    // files에 들어온 이미지가 있으면 업로드한다
    const results = await Promise.all(
      args.files
        .filter((el) => el)
        .map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    const resultUrls = results.map((el) => el.data?.uploadFile.url ?? "");

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price), // 가격은 number
            tags: data.tags,
            images: resultUrls,
          },
        },
      });

      if (result.data?.createUseditem._id === undefined) {
        Modal.error({ content: "요청에 문제가 있습니다" });
        return;
      }
      void router.push(`/shop/${result.data.createUseditem._id}`);
      Modal.success({ content: "상품 등록에 성공하셨습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  /** 상품 수정하기 함수 */
  const onClickUpdateItem = async (data: any): Promise<void> => {
    if (!router || typeof router.query.useditemId !== "string") return;
    if (!args.files || !args.setValue || !data.images) return;

    args.setValue("images", args.files);

    args.imageUrls?.forEach((el, index) => {
      if (el.includes("codecamp")) uploadImages[index] = el;
    });

    const results = await Promise.all(
      args.files
        .filter((el) => el)
        .map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    const resultUpload = results.map((el) => el.data?.uploadFile.url ?? "");

    let newIndex = 0; // 새 배열의 인덱스

    // uploadImage의 배열 길이 까지 반복
    for (let i = 0; i < uploadImages.length; i++) {
      // uploadImage 배열이 빈 값이거나 newIndex의 값이 업로드한 이미지 개수보다 적으면 실행
      if (uploadImages[i] === undefined && newIndex < resultUpload.length) {
        // uploadImage에 값이 있으면 실행 x 값이 없다면 업로드한 이미지를 배열에 넣어줌
        uploadImages[i] = resultUpload[newIndex];
        newIndex++;
      }
    }
    // 반복문이 끝난 이후에도 resultUpload가 newIndex보다 작으면 아직 이미지가 남아있으므로
    // 남은 이미지는 push해준다
    while (newIndex < resultUpload.length) {
      uploadImages.push(resultUpload[newIndex]);
      newIndex++;
    }

    const updateUseditemInput: IupdateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = data.price;
    if (data.tags) updateUseditemInput.tags = data.tags;
    if (resultUpload) updateUseditemInput.images = uploadImages;
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      if (result.data?.updateUseditem._id === undefined) {
        Modal.error({ content: "요청에 문제가 있습니다" });
        return;
      }

      Modal.success({ content: "수정되었습니다" });
      void router.push(`/shop/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  /** 삭제 함수 */
  const onClickDeleteItem = async (): Promise<void> => {
    if (args.useditemId === undefined) return;
    try {
      await deleteUseditem({
        variables: { useditemId: args.useditemId },
      });
      Modal.success({ content: "상품이 삭제되었습니다." });
      void router.push("/shop");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onClickUseditem, onClickUpdateItem, onClickDeleteItem };
};
