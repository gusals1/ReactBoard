import { useRouter } from "next/router";

// useCheckedId는 "boardId" 값을 넣어서 사용해준다.
export const useCheckedId = (id: string) => {
  const router = useRouter();

  const queryId = router.query[id];

  if (!queryId) return { id: "" };

  if (typeof queryId === "string") return { id: queryId };

  if (typeof queryId === "object") return { id: queryId[0] };

  return { id: "" };
};
