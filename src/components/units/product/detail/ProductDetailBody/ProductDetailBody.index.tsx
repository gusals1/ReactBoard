import type { IproductDetailHeaderProps } from "../ProductDetailHeader/ProductDetailHeader.types";
import * as S from "./ProductDetailBody.styles";

export default function ProductDetailBody(props: IproductDetailHeaderProps) {
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

        <S.ProductContents>
          {props.data?.fetchUseditem.contents}
        </S.ProductContents>

        <S.ProductTags>{props.data?.fetchUseditem?.tags}</S.ProductTags>
      </S.Body>
    </>
  );
}
