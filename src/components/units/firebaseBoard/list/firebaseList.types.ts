import type { DocumentData } from "firebase/firestore/lite";
import type { MouseEvent } from "react";

export interface IFirebaseListProps {
  data: DocumentData[];
  onClickNew: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
