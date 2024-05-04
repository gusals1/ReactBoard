import { Modal } from "antd";
import { useMutationDeleteBoard } from "../mutations/useMutationDeleteBoard";
import { useRouter } from "next/router";

interface useBoardArgs {
  boardId: string;
}
export const useBoard = (args: useBoardArgs) => {
  const router = useRouter();
  const [deleteBoard] = useMutationDeleteBoard();

  const onClickDelete = async (): Promise<void> => {
    try {
      await deleteBoard({
        variables: { boardId: args.boardId },
      });
      void router.push("/boards");
      Modal.success({ content: "게시글을 삭제했습니다" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickDelete,
  };
};
