import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { assets } from "../assets/assets";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "black" }} onClick={onClick} />;
}

const Services = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
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
    <div className="bg-[#F0EFF6] flex flex-col items-center py-20 gap-4" id="Services">
      <h1 className="text-3xl font-bold px-10 py-8 text-left">OUR SERVICES</h1>
      <div className="mx-10">
        <Slider {...settings}>
          <div className="mr-2 px-2">
            <div className="bg-white mb-8 px-6 py-3 rounded-lg shadow-lg">
              <img className="px-4 py-6" src={assets.services1} alt="" />
              <h1 className="text-xl font-semibold">Digital strategy</h1>
              <p className="py-4">Shape digital strategy and promote Digital mindset, for continuous disruption.</p>
            </div>
          </div>

          <div className="mr-2 px-2">
            <div className="bg-white mb-8 px-6 py-3 rounded-lg shadow-lg">
              <img className="px-4 py-6" src={assets.services1} alt="" />
              <h1 className="text-xl font-semibold">Digital strategy</h1>
              <p className="py-4">Shape digital strategy and promote Digital mindset, for continuous disruption.</p>
            </div>
          </div>

          <div className="mr-2 px-2">
            <div className="bg-white mb-8 px-6 py-3 rounded-lg shadow-lg">
              <img className="px-4 py-6" src={assets.services1} alt="" />
              <h1 className="text-xl font-semibold">Digital strategy</h1>
              <p className="py-4">Shape digital strategy and promote Digital mindset, for continuous disruption.</p>
            </div>
          </div>

          <div className="mr-2 px-2">
            <div className="bg-white mb-8 px-6 py-3 rounded-lg shadow-lg">
              <img className="px-4 py-6" src={assets.services1} alt="" />
              <h1 className="text-xl font-semibold">Digital strategy</h1>
              <p className="py-4">Shape digital strategy and promote Digital mindset, for continuous disruption.</p>
            </div>
          </div>
        </Slider>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Get a Demo</button>
    </div>
  );
};

export default Services;
