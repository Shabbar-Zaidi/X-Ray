import { assets } from "../assets/assets";

const Cardly = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center mt-10 ml-10 mr-0 gap-10 bg-[#FFFFFF] rounded-l-4xl px-5 py-5">
      <div className="flex flex-col items-center">
        <img className="relative " src={assets.phone} alt="" />
        <div className="flex flex-col gap-2 mt-5 justify-center absolute top-0 left-0">
          <img className="absolute top-0 left-0" src={assets.image01} alt="" />
          <img className="absolute" src={assets.image02} alt="" />
        </div>
      </div>
      <div className="flex flex-col max-w-lg">
        <h1 className="text-[#38297C] text-2xl font-bold mb-4">Cardly</h1>
        <p className="text-[#38297C]">Digital Card on your phone Carry your card with you all the time and everywhere</p>
        <div className="my-5">
          <h1 className="text-[#38297C] text-xl font-bold mb-2">What Solution Provide ?</h1>
          <p className="text-[#38297C]">
            Instantly share contact details without the need for an app or internet connection. Corporate digital business card software built for Apple Wallet® and Google Pay .
          </p>
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

export default Cardly;
