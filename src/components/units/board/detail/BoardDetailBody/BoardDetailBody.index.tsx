import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useLikeCount } from "../../../../commons/hooks/customs/useLikeCount";
import type { IBoardDetailHeaderProps } from "../BoardDetailHeader/BoardDetailHeader.types";
import * as S from "./BoardDetailBody.styles";

export default function BoardDetailBody(props: IBoardDetailHeaderProps) {
  const { id } = useCheckedId("boardId");
  const { onClickLike, onClickDislike } = useLikeCount({ boardId: id }); // 좋아요 싫어요 api
  return (
    <>
      <S.Body>
        <S.BoardTitle>{props.data?.fetchBoard?.title}</S.BoardTitle>
        <S.BoardImageWrapper>
          {props.data?.fetchBoard?.images // fetchBoard한 데이터 중에 이미지가 있다면 찾아서 화면에 보여줌
            ?.filter((el) => el)
            .map((el, index) => (
              <S.BoardImage
                key={index}
                src={`https://storage.googleapis.com/${el}`}
                alt="image"
              />
            ))}
        </S.BoardImageWrapper>
        <S.BoardContents>{props.data?.fetchBoard?.contents}</S.BoardContents>
        <S.YoutubeWrapper>
          {props.data?.fetchBoard.youtubeUrl !== "" && ( // youtubeUrl이 있다면 youtubePlayer를 보여줌
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
              onClick={onClickLike}
            />
            <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
          </S.LikeInner>
          <S.LikeInner>
            <S.LikeIcon
              src="/images/dislike.png"
              alt="dislike Count"
              onClick={onClickDislike}
            />
            <S.DisLikeCount>
              {props.data?.fetchBoard.dislikeCount}
            </S.DisLikeCount>
          </S.LikeInner>
        </S.LikeWrapper>
      </S.Body>
    </>
  );
}
