import { useRouter } from "next/router";

// useCheckedId는 "boardId" 값을 넣어서 사용해준다.
export const useCheckedId = (id: string) => {
  // useRouter 사용
  const router = useRouter();
  // router.query의 id값을 가져옴 => 이때 id는 함수를 호출할때 인수로 받음
  const queryId = router.query[id];
  // queryId가 없으면 빈 값 return
  if (!queryId) return { id: "" };
  // id가 string이면 그대로 return
  if (typeof queryId === "string") return { id: queryId };
  // id의 타입이 object면 값에 접근해서 return
  if (typeof queryId === "object") return { id: queryId[0] };

  return { id: "" };
};
