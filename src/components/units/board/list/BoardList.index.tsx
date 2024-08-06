import { getDate } from "../../../../commons/libraries/util";
import * as S from "./BoardList.style";
import { v4 as uuidv4 } from "uuid";

import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import { useQueryFetchBoards } from "../../../commons/hooks/queries/useQueryFetchBoards";
import { useQueryFetchBoardsCount } from "../../../commons/hooks/queries/useQueryFetchBoardsCount";
import { useSearch } from "../../../commons/hooks/customs/useSearch";
import Pagenation01 from "../../../commons/pagenation/pagenation.index";
import SearchBar from "../../../commons/searchbar/searchBar.index";
import { Best } from "./Best";

export default function BoardList(): JSX.Element {
  // router.push('/경로')를 hooks로 만들어 놓음
  const { onClickMoveToPage } = useMoveToPage();

  // fetchBoards 선언한 hooks를 가져와 data로 받고 refetch도 사용한다
  const { data, refetch } = useQueryFetchBoards();

  // fetchBoardCount를 가져와 사용하고 이름은 : 뒤에 있는 것으로 사용( fetchBoards와 겹치기 때문)
  const { data: dataBoardCount, refetch: refetchBoardCount } =
    useQueryFetchBoardsCount();

  // useSearch를 호출 인수로 refetch와 refetchCount가 사용됨( 검색하면 검색 내용과 페이지수가 바뀌기 때문)
  const { keyword, onChangeSearchBar } = useSearch({
    refetch,
    refetchBoardCount,
  });

  // search할때 구분하기 위한 keyword
  const secretKey = "!#@!@$";

  return (
    <S.Wrapper>
      <S.Title>베스트 게시글</S.Title>
      <S.TopBox>
        {/* 베스트 게시글 영역 (임시 json 데이터 사용 api가 없어서 */}
        {Best.map((el, index) => (
          <S.PostCard key={index}>
            <S.Image src={el.image} />
            <S.TextBox>
              <S.PostTitleBest>{el.title}</S.PostTitleBest>
              <S.WriterInfo>
                <S.Profile>
                  <S.IconProfile src="/images/avatar.png" />
                  <S.ProfileName>{el.name}</S.ProfileName>
                </S.Profile>
                <S.Good src="/images/icon_good.png" />
              </S.WriterInfo>
              <S.WriterInfo>
                <S.Dates>Date : {el.date}</S.Dates>
                <S.NumberLike>{el.like}</S.NumberLike>
              </S.WriterInfo>
            </S.TextBox>
          </S.PostCard>
        ))}
      </S.TopBox>
      {/* 제목, 날짜, 검색버튼 */}
      <S.SearchArea>
        <SearchBar onChangeSearchBar={onChangeSearchBar} text="제목" />

        <S.SelectDate type="date" required pattern="\d{4}-\d{2}\d{2}" />
        <S.SearchButton>검색하기</S.SearchButton>
      </S.SearchArea>
      {/* 게시글 목록 */}
      <S.Table>
        <S.TableHeader>
          <S.PostId>번호</S.PostId>
          <S.PostTitle>제목</S.PostTitle>
          <S.PostWriter>작성자</S.PostWriter>
          <S.PostDate>날짜</S.PostDate>
        </S.TableHeader>
        {/* fetchBoard의 결과를 map으로 뿌려줌 */}
        {data?.fetchBoards.map((el) => (
          <S.TableRow
            key={el._id}
            onClick={onClickMoveToPage(`/boards/${el._id}`)} // 클릭하면 id값을 통해 상세 페이지로 이동함
          >
            <S.PostId>{el._id.slice(-4).toUpperCase()}</S.PostId>
            <S.PostTitle>
              {el.title
                .replaceAll(keyword, `${secretKey}${keyword}${secretKey}`) // keyword로 들어온값 == 검색창에 입력한 값을 secretKey로 감싸줌
                .split(secretKey) // secretKey로 split해서 나눔
                .map((el) => (
                  // map으로 split해서 만약 검색어(keyword)와 el로 들어온 값이 동일하면 isMatch === true
                  /* 해당하는 keyWord만 다른 css로 변경해주기 위해 감싸줌 */
                  <S.MatchKeyword key={uuidv4()} isMatch={keyword === el}>
                    {el}
                  </S.MatchKeyword>
                ))}
            </S.PostTitle>
            <S.PostWriter>{el.writer}</S.PostWriter>
            {/* getDate = UTC 시간을 날짜 형식으로 */}
            <S.PostDate>{getDate(el.createdAt)}</S.PostDate>
          </S.TableRow>
        ))}
      </S.Table>
      {/* 페이지네이션, 게시글 등록 페이지 이동 버튼 */}
      <S.BtmWrapper>
        <Pagenation01 // < 1 2 3 4 5 > 페이지네이션 컴포넌트
          refetch={refetch} // 검색했을때 다시 조회하기 위해 refetch를 넘김
          count={dataBoardCount?.fetchBoardsCount ?? 0} // count = fetchBoardCount의 결과값
        />
        <S.RegisterButton onClick={onClickMoveToPage("/boards/new")}>
          <S.Icon src="/images/pencil.png" />
          게시글 등록하기
        </S.RegisterButton>
      </S.BtmWrapper>
    </S.Wrapper>
  );
}
