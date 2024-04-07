import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./LayoutBanner.styles";
export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
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
        {/* 이 부분에 들어갈 배너를 못찾아서 아직 넣지 못했음. */}
        <div>
          <h3 style={{ background: "#ccc" }}>1</h3>
        </div>
        <div>
          <h3 style={{ background: "#000" }}>1</h3>
        </div>
      </Slider>
    </S.BannerWrapper>
  );
}
