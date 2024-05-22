import * as S from "./ProductList.style";
import { v4 as uuidv4 } from "uuid";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
// import { useSearch } from "../../../commons/hooks/customs/useSearch";
import SearchBar from "../../../commons/searchbar/searchBar.index";
import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USEDITEMS = gql`
  query {
    fetchUseditems(page: 1) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
    }
  }
`;

export default function ProductList(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  // const { keyword, onChangeSearchBar } = useSearch({
  //   refetch,
  // });

  const secretKey = "!#@!@$";
  return (
    <S.Wrapper>
      <S.Title>베스트 상품</S.Title>
      <S.TopBox>
        {/* 베스트 게시글 영역 (같은 디자인이라 map으로 뿌려줌)
            나중에 배열 데이터 or DB데이터를 이용해 뿌려주면 될듯
        */}
        {new Array(4).fill(1).map((_, index) => (
          <S.PostCard key={index}>
            <S.Image src="/images/best_post1.png" />
            <S.TextBox>
              <S.PostTitleBest>게시글 제목입니다</S.PostTitleBest>
              <S.WriterInfo>
                <S.Profile>
                  <S.IconProfile src="/images/avatar.png" />
                  <S.ProfileName>박현민</S.ProfileName>
                </S.Profile>
                <S.Good src="./images/icon_good.png" />
              </S.WriterInfo>
              <S.WriterInfo>
                <S.Dates>Date : 2023.11.09</S.Dates>
                <S.NumberLike>234</S.NumberLike>
              </S.WriterInfo>
            </S.TextBox>
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
          <SearchBar onChangeSearchBar={() => {}} text="상품" />
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
            <S.PostId>
              {/* {el._id.slice(-4).toUpperCase()} */}
              <img
                src={
                  el.images
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : ""
                }
                alt="goods image"
                style={{ minHeight: "160px" }}
              />
            </S.PostId>
            <S.PostTitle>
              {el.name
                .replaceAll(el._id, `${secretKey}${el._id}${secretKey}`)
                .split(secretKey)
                .map((li) => (
                  <S.MatchKeyword key={uuidv4()} isMatch={el._id === li}>
                    {li}
                  </S.MatchKeyword>
                ))}
            </S.PostTitle>

            <S.PostDate>{el.price}원</S.PostDate>
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
