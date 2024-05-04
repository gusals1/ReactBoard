import { Tooltip } from "antd";
import * as S from "./BoardDetailHeader.styles";
import { getDate } from "../../../../../commons/libraries/util";
import type { IBoardDetailHeaderProps } from "./BoardDetailHeader.types";

export default function BoardDetailHeader(props: IBoardDetailHeaderProps) {
  return (
    <>
      {/* BoardDetail Header------------------------------------------------ */}
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
    </>
  );
}
