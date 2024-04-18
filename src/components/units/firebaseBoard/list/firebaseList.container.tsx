import { useRouter } from "next/router";
import { useEffect, useState, type MouseEvent } from "react";
import FirebaseListUI from "./firebaseList.presenter";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { getDocs, getFirestore, collection } from "firebase/firestore/lite";
import type { DocumentData } from "firebase/firestore/lite";

export default function FirebaseList(): JSX.Element {
  // 게시글 목록 페이지
  const router = useRouter();
  const [data, setData] = useState<DocumentData[]>([]);
  // firebaseApp

  useEffect(() => {
    const onFetchFirebase = async (): Promise<void> => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setData(boards);
    };
    void onFetchFirebase();
  }, []);

  /* 게시글 생성 페이지 이동 */

  const onClickNew = (): void => {
    void router.push(`${router.asPath}/new`);
  };

  /* 게시글 상세 페이지 이동 */
  const onClickDetail = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <FirebaseListUI
      data={data}
      onClickNew={onClickNew}
      onClickDetail={onClickDetail}
    />
  );
}
