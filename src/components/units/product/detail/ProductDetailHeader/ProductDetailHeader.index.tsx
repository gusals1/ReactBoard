import { Tooltip } from "antd";
import * as S from "./ProductDetailHeader.styles";
import { getDate } from "../../../../../commons/libraries/util";
import type { IproductDetailHeaderProps } from "./ProductDetailHeader.types";

export default function ProductDetailHeader(
  props: IproductDetailHeaderProps
): JSX.Element {
  return (
    <>
      {/* BoardDetail Header------------------------------------------------ */}
      <S.MainHeader>
        <S.ProfileWrapper>
          <S.ProfileImage src="../../images/avatar.png" />
          <S.Info>
            <S.Writer>{props.data?.fetchUseditem?.name}</S.Writer>
            <S.CreatedAt>
              {getDate(props.data?.fetchUseditem.createdAt)}
            </S.CreatedAt>
          </S.Info>
        </S.ProfileWrapper>
        <S.IconWrapper>
          <S.Clip src="/images/clip.png" />
          <Tooltip
            placement="topRight"
            title={props.data?.fetchUseditem.contents ?? ""}
          >
            <S.Location src="/images/location.png" />
          </Tooltip>
        </S.IconWrapper>
      </S.MainHeader>
      <S.UnderLine />
    </>
  );
}
