import { Tooltip } from "antd";
import { getDate } from "../../../../commons/libraries/util";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Main>
        <S.MainHeader>
          <S.ProfileWrapper>
            <S.ProfileImage src="../../images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.CreatedAt>
            </S.Info>
          </S.ProfileWrapper>
          <S.IconWrapper>
            <S.Clip src="/images/clip.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
              }`}
            >
              <S.Location src="/images/location.png" />
            </Tooltip>
          </S.IconWrapper>
        </S.MainHeader>
        <S.UnderLine></S.UnderLine>
        <S.Body>
          <S.BoardTitle>{props.data?.fetchBoard?.title}</S.BoardTitle>
          <S.BoardImageWrapper>
            {props.data?.fetchBoard?.images
              ?.filter((el) => el)
              .map((el) => (
                <S.BoardImage
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                  alt="image"
                />
              ))}
          </S.BoardImageWrapper>
          <S.BoardContents>{props.data?.fetchBoard?.contents}</S.BoardContents>
          <S.YoutubeWrapper>
            {props.data?.fetchBoard.youtubeUrl !== "" && (
              <S.BoardYoutubePlayer
                url={props.data?.fetchBoard?.youtubeUrl ?? ""}
                width={486}
                height={240}
              ></S.BoardYoutubePlayer>
            )}
          </S.YoutubeWrapper>

          <S.LikeWrapper>
            <S.LikeInner>
              <S.LikeIcon
                src="/images/like.png"
                alt="Like Count"
                onClick={props.onClickCountUp}
              />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.LikeInner>
            <S.LikeInner>
              <S.LikeIcon
                src="/images/dislike.png"
                alt="dislike Count"
                onClick={props.onClickCountDown}
              />
              <S.DisLikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DisLikeCount>
            </S.LikeInner>
          </S.LikeWrapper>
        </S.Body>
      </S.Main>
      <S.BottomWrapper>
        <S.Button onClick={props.MoveToList}>목록으로</S.Button>
        <S.Button onClick={props.MoveToEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
