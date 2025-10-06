import { assets } from "../assets/assets";

const SmartMirror = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center mt-10 mr-10 ml-0 gap-10 bg-[#FFFFFF] rounded-r-4xl px-5 py-5">
      <div className="">
        <img src={assets.smartMirror} alt="" />
      </div>
      <div className="flex flex-col max-w-lg">
        <h1 className="text-[#38297C] text-2xl font-bold mb-4">Smart Mirror</h1>
        <p className="text-[#38297C]">Interact with your audience stimulate positive feedback treat negative feedback</p>
        <div className="my-5">
          <h1 className="text-[#38297C] text-xl font-bold mb-2">What Solution Provide ?</h1>
          <p className="text-[#38297C]">
            On spot Customer emotion interaction using face recognition and AI to read customer real emotion and respond based on it. This allow defining exact time and gender and information about
            your satisfied or dissatisfied customer
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-5 items-center justify-center">
          <img src={assets.Frame19} alt="" />
          <img src={assets.Frame20} alt="" />
          <img src={assets.Frame21} alt="" />
          <img src={assets.Frame22} alt="" />
          <img src={assets.Frame23} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SmartMirror;
