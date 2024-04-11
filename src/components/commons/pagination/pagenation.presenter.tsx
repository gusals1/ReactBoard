import * as S from "./pagenation.style";
import type { IPagenationUIProps } from "./pagenation.types";

export default function PagenationUI(props: IPagenationUIProps): JSX.Element {
  return (
    <S.PageNumWrapper>
      <S.PrevArrow onClick={props.onClickPrev}>&lt; </S.PrevArrow>

      {new Array(10).fill(10).map((el, index) =>
        index + props.page <= props.lastPage ? (
          <S.PageNum
            id={String(index + props.page)}
            key={index}
            onClick={props.onClickPageMove}
          >
            {/* id값에 page를 더한 이유는 index 값이 0-9일때 page값은 1
                  page를 넘겨서 10이 증가하거나 감소하면 그에 따라 page의 값은 11 or 1이기 떄문
                  그렇게 되면 보여지는데엔 문제가 없어지고 페이지를 이동하는 경우에만 값이 바뀜.
              */}
            {index + props.page}
          </S.PageNum>
        ) : (
          <></>
        )
      )}

      <S.NextArrow onClick={props.onClickNext}>&gt; </S.NextArrow>
    </S.PageNumWrapper>
  );
}
