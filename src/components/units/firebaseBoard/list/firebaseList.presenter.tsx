// import { getDate } from "../../../commons/libraries/util";
import * as S from "./firebaseList.style";
import type { IFirebaseListProps } from "./firebaseList.types";
// import Pagenation01 from "../../commons/pagination/pagenation.container";

export default function FirebaseListUI(props: IFirebaseListProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Title>FireBase 게시판</S.Title>

      {/* 게시글 목록 */}
      <S.Table>
        <S.TableHeader>
          <S.PostId>번호</S.PostId>
          <S.PostTitle>제목</S.PostTitle>
          <S.PostWriter>작성자</S.PostWriter>
          <S.PostDate>내용</S.PostDate>
        </S.TableHeader>
        {/* fetchBoard의 결과를 map으로 뿌려줌 */}
        {props.data?.map((el, index) => (
          <S.TableRow key={index} onClick={props.onClickDetail}>
            <S.PostId>{index + 1}</S.PostId>
            <S.PostTitle>{el.title}</S.PostTitle>
            <S.PostWriter>{el.writer}</S.PostWriter>
            <S.PostDate>{el.contents}</S.PostDate>
          </S.TableRow>
        ))}
      </S.Table>
      <S.RegisterButton onClick={props.onClickNew}>
        <S.Icon src="/images/pencil.png" />
        게시글 등록하기
      </S.RegisterButton>
    </S.Wrapper>
  );
}
