import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./LayoutBanner.styles";
export default function LayoutBanner(): JSX.Element {
  // react 슬라이더 설정
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
          <img src="/bannerImage/Banner1.jpg" alt="1번 배너" />
        </S.Banner>
        <S.Banner>
          <img src="/bannerImage/Banner2.jpg" alt="2번 배너" />
        </S.Banner>
        <S.Banner>
          <img src="/bannerImage/Banner3.jpg" alt="3번 배너" />
        </S.Banner>
      </Slider>
    </S.BannerWrapper>
  );
}
