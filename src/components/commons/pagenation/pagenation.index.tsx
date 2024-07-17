import { useState } from "react";
import type { MouseEvent } from "react";
import * as S from "./pagenation.style";
import type { IPagenation01Props } from "./pagenation.types";

export default function Pagenation01(props: IPagenation01Props): JSX.Element {
  // page 개수 state
  const [page, setPage] = useState(1);
  // 클릭된 페이지 번호 state
  const [activeNum, setActiveNum] = useState(1);

  // props.count => fetchBoardCount의 결과값
  // 10으로 나눈 값을 올림해서 사용 없다면 0 | 마지막 페이지이기 때문에 1개가 더 많아야함.
  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  /** 이전 페이지 클릭 시 동작
      page값을 현재값에서 10을 뺀 값으로 set해주고 그 값으로 refetch
   */
  const onClickPrev = (): void => {
    if (page === 1) return; // page가 1이면 실행 x
    setPage((prev) => prev - 10);
    setActiveNum(page - 10);
    void props.refetch({ page: page - 10 });
  };

  /** 다음 페이지 클릭 함수
      page값을 현재값에서 10을 더한 값으로 set해주고 그 값으로 refetch
   */
  const onClickNext = async (): Promise<void> => {
    if (page + 10 > lastPage) return; // page가 lasgePage보다 크면 실행 x
    setPage((prev) => prev + 10);
    setActiveNum(page + 10);
    void props.refetch({ page: page + 10 });
  };

  /** 페이지 클릭시 해당하는 페이지의 게시글을 refetch해주는 페이지 move 함수 */
  const onClickPageMove = (event: MouseEvent<HTMLParagraphElement>): void => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    setActiveNum(Number(event.currentTarget.id));
  };

  return (
    <S.PageNumWrapper>
      <S.PrevArrow onClick={onClickPrev}>&lt; </S.PrevArrow>

      {new Array(10).fill(10).map(
        (_, index) =>
          index + page <= lastPage && (
            <S.PageNum
              id={String(index + page)} // 페이지 클릭시 전달되는 값
              key={index + page}
              onClick={onClickPageMove}
              isActive={activeNum === index + page} // active와 일치하면 활성화 시킴
            >
              {/* index + page인 이유? => page는 10단위로 증감하고 page = 10의자리 index = 1의자리 */}
              {index + page}
            </S.PageNum>
          )
      )}

      <S.NextArrow onClick={onClickNext}>&gt; </S.NextArrow>
    </S.PageNumWrapper>
  );
}
