import * as S from "./ProductList.style";
import { v4 as uuidv4 } from "uuid";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import SearchBar from "../../../commons/searchbar/searchBar.index";
import { useSearch } from "../../../commons/hooks/customs/useSearch";
import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";

export default function ProductList(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { keyword, onChangeSearchBar } = useSearch({});
  const { data } = useQueryFetchUsedItems();
  const secretKey = "!#@!@$";

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
          <S.Sale>판매중 상품</S.Sale>
          <S.Sale>판매된 상품</S.Sale>
        </S.SalesWrapper>
        <S.SearchWrap>
          <SearchBar onChangeSearchBar={onChangeSearchBar} text="상품" />
          <S.SelectDate type="date" required pattern="\d{4}-\d{2}\d{2}" />
          <S.SearchButton>검색</S.SearchButton>
        </S.SearchWrap>
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
              <S.ProdName>
                {el.name
                  .replaceAll(keyword, `${secretKey}${keyword}${secretKey}`)
                  .split(secretKey)
                  .map((li) => (
                    <S.MatchKeyword key={uuidv4()} isMatch={keyword === li}>
                      {li}
                    </S.MatchKeyword>
                  ))}
              </S.ProdName>
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
