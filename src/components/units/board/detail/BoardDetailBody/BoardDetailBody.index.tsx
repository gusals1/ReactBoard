import { useCheckedId } from "../../../../commons/hooks/customs/useCheckedId";
import { useLikeCount } from "../../../../commons/hooks/customs/useLikeCount";
import type { IBoardDetailHeaderProps } from "../BoardDetailHeader/BoardDetailHeader.types";
import * as S from "./BoardDetailBody.styles";

export default function BoardDetailBody(props: IBoardDetailHeaderProps) {
  // like dislike api 가져와야함.
  const { id } = useCheckedId("boardId");
  const { onClickLike, onClickDislike } = useLikeCount({ boardId: id });
  return (
    <>
      <S.Body>
        <S.BoardTitle>{props.data?.fetchBoard?.title}</S.BoardTitle>
        <S.BoardImageWrapper>
          {props.data?.fetchBoard?.images
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
