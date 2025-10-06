import { assets } from "../assets/assets";

const DigitalOnboarding = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center mt-10 ml-10 mr-0 gap-10 bg-[#FFFFFF] rounded-l-4xl px-5 py-5">
      <div className="">
        <img src={assets.VR} alt="" />
        <img src={assets.laptop} alt="" />
      </div>
      <div className="flex flex-col max-w-lg">
        <h1 className="text-[#38297C] text-2xl font-bold mb-4">Digital Onboarding</h1>
        <p className="text-[#38297C]">Use VR\AR to welcome your new joiner and guests</p>
        <div className="my-5">
          <h1 className="text-[#38297C] text-xl font-bold mb-2">What Solution Provide ?</h1>
          <p className="text-[#38297C]">Welcome your new joiners, with cutting edge technology</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-5 items-center justify-center">
          <img src={assets.Frame14} alt="" />
          <img src={assets.Frame15} alt="" />
          <img src={assets.Frame16} alt="" />
          <img src={assets.Frame17} alt="" />
          <img src={assets.Frame18} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DigitalOnboarding;
