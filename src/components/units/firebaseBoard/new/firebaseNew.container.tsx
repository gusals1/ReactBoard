import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import FireBaseNewUI from "./firebaseNew.presenter";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FireBaseNew(): JSX.Element {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>): void => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  const onClickRegister = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer,
      title,
      contents,
    });
    alert("데이터 등록 성공");
    void router.push("/firebaseBoard");
  };

  return (
    <FireBaseNewUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
    />
  );
}
