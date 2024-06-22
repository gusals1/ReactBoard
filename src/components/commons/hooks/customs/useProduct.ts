import { Modal } from "antd";
import { useMutationCreateUseditem } from "../mutations/useMutationCreateUseditem";
import { useRouter } from "next/router";
import { useMutationUpdateUseditem } from "../mutations/useMutationUpdateUseditem";
import { useMutationDeleteUseditem } from "../mutations/useMutationDeleteUseditem";
import type { UseFormSetValue } from "react-hook-form";
import { useMutationUploadFile } from "../mutations/useMutationUploadFile";
import type { IUseditemForm } from "../../../units/product/write/ProductWrite.types";

interface IUseProductArgs {
  useditemId?: string;
  setValue?: UseFormSetValue<IUseditemForm> | undefined;
  files?: File[];
  imageUrls?: string[];
}

export const useProduct = (args: IUseProductArgs) => {
  const router = useRouter();
  const [uploadFile] = useMutationUploadFile();
  const [createUseditem] = useMutationCreateUseditem();
  const [updateUseditem] = useMutationUpdateUseditem();
  const [deleteUseditem] = useMutationDeleteUseditem();

  const onClickUseditem = async (data: IUseditemForm): Promise<void> => {
    if (!args.files || !args.setValue) return;

    const results = await Promise.all(
      args.files
        .filter((el) => el)
        .map(async (el) => await uploadFile({ variables: { file: el } }))
    );
    const resultUrls = results.map((el) => el.data?.uploadFile.url ?? "");
    console.log(resultUrls);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
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

  const onClickUpdateItem = async (data: any): Promise<void> => {
    if (!router || typeof router.query.useditemId !== "string") return;
    interface IupdateUseditemInput {
      name?: string;
      remarks?: string;
      contents?: string;
      price?: number;
      tags?: string[];
      images?: string[];
    }
    const updateUseditemInput: IupdateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = data.price;
    if (data.tags) updateUseditemInput.tags = data.tags;
    if (data.images) updateUseditemInput.images = data.images;
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
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
