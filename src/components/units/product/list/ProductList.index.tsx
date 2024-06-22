import * as S from "./ProductList.style";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";
import { type ChangeEvent, useState, useEffect } from "react";

export default function ProductList(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const [soldOut, setSoldout] = useState(false);
  const { data, refetch } = useQueryFetchUsedItems({ isSoldout: soldOut });
  // const secretKey = "!#@!@$";

  const onChangeSoldout = (e: ChangeEvent<HTMLInputElement>) => {
    setSoldout(e.target.value === "tab2");
  };

  useEffect(() => {
    void refetch({ isSoldout: soldOut });
  }, [soldOut, refetch]);

  return (
    <S.Wrapper>
      <S.Title>베스트 상품</S.Title>
      <S.TopBox>
        {new Array(4).fill(1).map((_, index) => (
          <S.PostCard key={index}>
            <S.Image src="/images/best_post1.png" />
            <S.BestBox>
              <S.MainTitle>삼성전자 갤럭시 탭</S.MainTitle>
              <S.SubTitle>2019 LTE 32GB</S.SubTitle>
              <S.WriterInfo>
                <S.BestPrice>240,120원</S.BestPrice>
                <S.LikeWrapper>
                  <S.Good src="./images/icon_good.png" />
                  <S.LikeCount>234</S.LikeCount>
                </S.LikeWrapper>
              </S.WriterInfo>
            </S.BestBox>
          </S.PostCard>
        ))}
      </S.TopBox>
      {/* 제목, 날짜, 검색버튼 */}
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
      {/* 게시글 목록 */}
      <S.Table>
        {/* fetchBoard의 결과를 map으로 뿌려줌 */}
        {data?.fetchUseditems.map((el) => (
          <S.TableRow
            key={el._id}
            onClick={onClickMoveToPage(`/shop/${el._id}`)}
          >
            <S.ProdImage
              src={
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
