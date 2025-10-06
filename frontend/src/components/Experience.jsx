import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { assets } from "../assets/assets";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};
const Experience = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#F0EFF6]">
      <h1 className="text-4xl font-bold px-10 py-12 text-left">EXPERIENCE</h1>
      <div className="px-10 pb-20 mx-10">
        <Slider {...settings}>
          <div>
            <img className="w-[493px] h-[268px] p-2" src={assets.experience1} alt="" />
          </div>
          <div>
            <img className="w-[493px] h-[268px] p-2" src={assets.experience2} alt="" />
          </div>
          <div>
            <img className="w-[493px] h-[268px] p-2" src={assets.experience3} alt="" />
          </div>
          <div>
            <img className="w-[493px] h-[268px] p-2" src={assets.experience1} alt="" />
          </div>
          <div>
            <img className="w-[493px] h-[268px] p-2" src={assets.experience2} alt="" />
          </div>
          <div>
            <img className="w-[493px] h-[268px] p-2" src={assets.experience3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
