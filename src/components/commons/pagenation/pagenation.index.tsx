import { useState } from "react";
import type { MouseEvent } from "react";
import * as S from "./pagenation.style";
import type { IPagenation01Props } from "./pagenation.types";

export default function Pagenation01(props: IPagenation01Props): JSX.Element {
  const [page, setPage] = useState(1);
  const [activeNum, setActiveNum] = useState(1);

  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  /** 이전 페이지 클릭 함수
      page가 1이면 실행 막음
      page는 pagination의 기준이 되는 숫자값
      activeNum은 원하는 페이지를 클릭했을때 그 페이지를 보여주기 위한 숫자값
   */

  const onClickPrev = (): void => {
    if (page === 1) return;
    setPage((prev) => prev - 10);
    setActiveNum(page - 10);
    void props.refetch({ page: page - 10 });
  };

  /** 다음 페이지 클릭 함수
      현재 페이지에서 10을 더한값이 last page보다 크면 실행 막음
      page는 pagination의 기준이 되는 숫자값
      activeNum은 원하는 페이지를 클릭했을때 그 페이지를 보여주기 위한 숫자값
      page와 active은 같이 증감 해야한다.
   */
  const onClickNext = async (): Promise<void> => {
    if (page + 10 > lastPage) return;
    setPage((prev) => prev + 10);
    setActiveNum(page + 10);
    void props.refetch({ page: page + 10 });
  };
  /** 각각 페이지를 누르면 해당 페이지의 데이터를 보여줌 */
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
              id={String(index + page)}
              key={index + page}
              onClick={onClickPageMove}
              isActive={activeNum === index + page}
            >
              {/* id값에 page를 더한 이유는 index 값이 0-9일때 page값은 1
                  page를 넘겨서 10이 증가하거나 감소하면 그에 따라 page의 값은 11 or 1이기 떄문
                  그렇게 되면 보여지는데엔 문제가 없어지고 페이지를 이동하는 경우에만 값이 바뀜.
              */}
              {index + page}
            </S.PageNum>
          )
      )}

      <S.NextArrow onClick={onClickNext}>&gt; </S.NextArrow>
    </S.PageNumWrapper>
  );
}
