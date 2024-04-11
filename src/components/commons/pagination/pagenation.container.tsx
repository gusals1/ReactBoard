import { useState, type MouseEvent } from "react";
import PagenationUI from "./pagenation.presenter";
import type { IPagenation01Props } from "./pagenation.types";

export default function Pagenation01(props: IPagenation01Props): JSX.Element {
  const [page, setPage] = useState(1);

  const onClickPrev = (): void => {
    if (page === 1) return;
    setPage((prev) => prev - 10);
    void props.refetch({ page: page - 10 });
    console.log(page);
  };

  const onClickNext = async (): Promise<void> => {
    if (page + 10 > props.lastPage) return;

    setPage((prev) => prev + 10);
    void props.refetch({ page: page + 10 });
    console.log(page);
  };
  const onClickPageMove = (event: MouseEvent<HTMLParagraphElement>): void => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    console.log(event.currentTarget.id);
  };

  return (
    <PagenationUI
      page={page}
      lastPage={props.lastPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickPageMove={onClickPageMove}
    />
  );
}
