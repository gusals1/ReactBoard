import * as S from "./ProductList.style";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import { type ChangeEvent, useState, useEffect } from "react";
import { BestProduct } from "./BestProduct";

export default function ProductList(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();
  // 상품 판매여부를 판별하기 위한 state
  const [soldOut, setSoldout] = useState(false);

  // 상품 데이터를 fetch 할때는 isSoldout의 값을 가지고 조회함 // 판매중: false, 판매완료: true
  const { data, refetch } = useQueryFetchUsedItems({ isSoldout: soldOut });

  // 탭 메뉴 클릭에 따라서 값을 바꿔준다 => tab2가 클릭되면 true 아니면 false
  const onChangeSoldout = (e: ChangeEvent<HTMLInputElement>) => {
    setSoldout(e.target.value === "tab2");
  };

  // soldOut이 변경되거나 refetch의 상태가 변경되면 soldOut를 반영해서 refetch한다
  useEffect(() => {
    void refetch({ isSoldout: soldOut });
  }, [soldOut, refetch]);

  return (
    <S.Wrapper>
      <S.Title>베스트 상품</S.Title>
      <S.TopBox>
        {BestProduct.map((el, index) => (
          <S.PostCard key={index}>
            <S.Image src={el.image} />
            <S.Line></S.Line>
            <S.BestBox>
              <S.MainTitle>{el.title}</S.MainTitle>
              <S.SubTitle>{el.name}</S.SubTitle>
              <S.ProductInfo>
                <S.BestPrice>{el.price}원</S.BestPrice>
                <S.LikeWrapper>
                  <S.Good src="/images/icon_good.png" />
                  <S.LikeCount>234</S.LikeCount>
                </S.LikeWrapper>
              </S.ProductInfo>
            </S.BestBox>
          </S.PostCard>
        ))}
      </S.TopBox>
      {/* 탭 메뉴 */}
      <S.TableTop>
        <S.SalesWrapper>
          <S.Sale>
            <S.RadioInput
              type="radio"
              id="tab1"
              value="tab1"
              name="tab"
              checked={!soldOut}
              onChange={onChangeSoldout}
            />
            <S.RadioLabel htmlFor="tab1">판매중 상품</S.RadioLabel>
          </S.Sale>
          <S.Sale>
            <S.RadioInput
              type="radio"
              id="tab2"
              name="tab"
              value="tab2"
              checked={soldOut}
              onChange={onChangeSoldout}
            />
            <S.RadioLabel htmlFor="tab2">판매된 상품</S.RadioLabel>
          </S.Sale>
        </S.SalesWrapper>
      </S.TableTop>
      {/* 상품 목록 */}
      <S.Table>
        {/* fetchBoard의 결과를 map으로 뿌려줌 */}
        {data?.fetchUseditems.map((el) => (
          <S.TableRow
            key={el._id}
            onClick={onClickMoveToPage(`/shop/${el._id}`)}
          >
            <S.ProdImage
              src={
                // 첫번째 이미지만 대표 이미지로 보여줌 없으면 X
                el.images
                  ? `https://storage.googleapis.com/${el.images[0]}`
                  : ""
              }
              alt="goods image"
            />
            <S.ProdInfo>
              <S.ProdName>{el.name}</S.ProdName>
              <S.ProdRemarks>{el.remarks}</S.ProdRemarks>
              <S.ProdTags>{el.tags}</S.ProdTags>
              <S.ProdProfile>
                <S.Profile src="/images/avatar.png" alt="" />
                <S.UserName>{el.seller ? el.seller.name : ""}</S.UserName>
              </S.ProdProfile>
            </S.ProdInfo>

            <S.ProdPrice>
              <S.IconDollar src="./images/icon_dollar.png" alt="" />
              <S.Price>{el.price}원</S.Price>
            </S.ProdPrice>
          </S.TableRow>
        ))}
      </S.Table>
      <S.BtmWrapper>
        <S.RegisterButton onClick={onClickMoveToPage("/shop/new")}>
          상품 등록하기
        </S.RegisterButton>
      </S.BtmWrapper>
    </S.Wrapper>
  );
}
