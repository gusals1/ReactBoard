import { getDate } from "../../../../commons/libraries/util";
import * as S from "./BoardList.style";
import type { IBoardListUIProps } from "./BoardList.types";
import Pagenation01 from "../../../commons/pagination/pagenation.container";
export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>베스트 게시글</S.Title>
      <S.TopBox>
        {new Array(4).fill(1).map(
          (
            el,
            index // 나중에 배열 데이터나 DB에 있는 값을 가져와서 map함수로 뿌려주면 될듯
          ) => (
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
          )
        )}
      </S.TopBox>

      <S.SearchArea>
        <S.SearchBox type="search" placeholder="제목을 검색해주세요" />
        <S.SelectDate type="date" required pattern="\d{4}-\d{2}\d{2}" />
        <S.SearchButton>검색하기</S.SearchButton>
      </S.SearchArea>

      <S.Table>
        <S.TableHeader>
          {/* <input type="checkbox"/> */}
          <S.PostId>번호</S.PostId>
          <S.PostTitle>제목</S.PostTitle>
          <S.PostWriter>작성자</S.PostWriter>
          <S.PostDate>날짜</S.PostDate>
        </S.TableHeader>
        {props.data?.fetchBoards.map((el) => (
          <S.TableRow key={el._id} id={el._id} onClick={props.onClickDetail}>
            <S.PostId>{el._id.slice(-4).toUpperCase()}</S.PostId>
            <S.PostTitle>{el.title}</S.PostTitle>
            <S.PostWriter>{el.writer}</S.PostWriter>
            <S.PostDate>{getDate(el.createdAt)}</S.PostDate>
          </S.TableRow>
        ))}
      </S.Table>

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
