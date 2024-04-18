import { getDate } from "../../../../commons/libraries/util";
import * as S from "./BoardList.style";
import type { IBoardListUIProps } from "./BoardList.types";
import Pagenation01 from "../../../commons/pagination/pagenation.container";
export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>베스트 게시글</S.Title>
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
      <S.SearchArea>
        <S.SearchBox type="search" placeholder="제목을 검색해주세요" />
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
        {props.data?.fetchBoards.map((el) => (
          <S.TableRow key={el._id} id={el._id} onClick={props.onClickDetail}>
            <S.PostId>{el._id.slice(-4).toUpperCase()}</S.PostId>
            <S.PostTitle>{el.title}</S.PostTitle>
            <S.PostWriter>{el.writer}</S.PostWriter>
            <S.PostDate>{getDate(el.createdAt)}</S.PostDate>
          </S.TableRow>
        ))}
      </S.Table>
      {/* 페이지네이션, 게시글 등록 페이지 이동 버튼 */}
      <S.BtmWrapper>
        <Pagenation01 refetch={props.refetch} lastPage={props.lastPage} />
        <S.RegisterButton onClick={props.onClickNew}>
          <S.Icon src="/images/pencil.png" />
          게시글 등록하기
        </S.RegisterButton>
      </S.BtmWrapper>
    </S.Wrapper>
  );
}
