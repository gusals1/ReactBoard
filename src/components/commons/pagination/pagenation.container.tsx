import { useState, type MouseEvent } from "react";
import PagenationUI from "./pagenation.presenter";
import type { IPagenation01Props } from "./pagenation.types";

export default function Pagenation01(props: IPagenation01Props): JSX.Element {
  const [page, setPage] = useState(1);
  const [activeNum, setActiveNum] = useState(1);

  const onClickPrev = (): void => {
    if (page === 1) return;
    setPage((prev) => prev - 10);
    setActiveNum(page - 10);
    void props.refetch({ page: page - 10 });
  };

  const onClickNext = async (): Promise<void> => {
    if (page + 10 > props.lastPage) return;
    setPage((prev) => prev + 10);
    setActiveNum(page + 10);
    void props.refetch({ page: page + 10 });
  };

  const onClickPageMove = (event: MouseEvent<HTMLParagraphElement>): void => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    setActiveNum(Number(event.currentTarget.id));
  };

  return (
    <PagenationUI
      page={page}
      activeNum={activeNum}
      lastPage={props.lastPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickPageMove={onClickPageMove}
    />
  );
}
