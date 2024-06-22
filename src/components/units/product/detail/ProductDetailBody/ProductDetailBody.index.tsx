import DOMPurify from "dompurify";
import type { IproductDetailHeaderProps } from "../ProductDetailHeader/ProductDetailHeader.types";
import * as S from "./ProductDetailBody.styles";
import { useEffect, useState } from "react";

export default function ProductDetailBody(props: IproductDetailHeaderProps) {
  // like dislike api 가져와야함.
  const [typeWindow, setTypeWindow] = useState(false);

  useEffect(() => {
    // 새로고침시 react unMount 에러가 뜸. ( 새로고침 시 이 컴포넌트는 없어지는데 setTypeWindow가 동작해 없는 컴포넌트를 업데이트 하려는 문제)
    setTypeWindow(true);
  }, []);

  return (
    <>
      <S.Body>
        <S.TitleWrap>
          <S.TitleInner>
            <S.ProductRemarks>
              {props.data?.fetchUseditem?.remarks}
            </S.ProductRemarks>
            <S.ProductTitle>{props.data?.fetchUseditem?.name}</S.ProductTitle>
          </S.TitleInner>
          <S.LikeInner>
            <S.LikeIcon src="/images/icon_favorite.png" alt="iconlike" />
            <S.LikeCount>{props.data?.fetchUseditem.pickedCount}</S.LikeCount>
          </S.LikeInner>
        </S.TitleWrap>
        <S.ProductPrice>{props.data?.fetchUseditem.price}원</S.ProductPrice>

        <S.ProductImageWrapper>
          {props.data?.fetchUseditem?.images
            ?.filter((el) => el)
            .map((el, index) => (
              <S.ProductImage
                key={index}
                src={`https://storage.googleapis.com/${el}`}
                alt="image"
              />
            ))}
        </S.ProductImageWrapper>

        {typeWindow ? (
          <S.ProductContents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                String(props.data?.fetchUseditem.contents)
              ),
            }}
          />
        ) : (
          <div></div>
        )}

        <S.ProductTags>{props.data?.fetchUseditem?.tags}</S.ProductTags>
        <S.UnderLine />
      </S.Body>
    </>
  );
}
