import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./LayoutBanner.styles";
export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrow: true,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <S.BannerWrapper>
      <Slider {...settings}>
        <S.Banner>
          <img src="/bannerImage/Banner1.jpg" alt="" />
        </S.Banner>
        <S.Banner>
          <img src="/bannerImage/Banner2.jpg" alt="" />
        </S.Banner>
        <S.Banner>
          <img src="/bannerImage/Banner3.jpg" alt="" />
        </S.Banner>
      </Slider>
    </S.BannerWrapper>
  );
}
