import * as S from "./firebaseNew.style";
import type { IFireBaseNewProps } from "./firebaseNew.types";

export default function FireBaseNewUI(props: IFireBaseNewProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.InputName>작성자:</S.InputName>
        <S.InputText type="text" onChange={props.onChangeWriter} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputName>제목:</S.InputName>
        <S.InputText type="text" onChange={props.onChangeTitle} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.InputName>내용:</S.InputName>
        <S.InputText type="text" onChange={props.onChangeContents} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Register onClick={props.onClickRegister}>등록하기</S.Register>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
