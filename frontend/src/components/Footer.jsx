import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center pt-20 m-auto mx-17 py-7 px-20">
        <h1 className="text-2xl font-bold text-center justify-center">
          We helped our partner to digitally <span className="text-[#C297DF]">transform</span> from paper to <span className="text-[#C297DF]">digital</span> cards in a few clicks
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 px-5 mx-20 my-10 items-center justify-center space-y-5 pb-10">
        <img src={assets.Logo00} alt="" />
        <img src={assets.Logo01} alt="" />
        <img src={assets.Logo02} alt="" />
        <img src={assets.Logo03} alt="" />
        <img src={assets.Logo04} alt="" />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 px-5 mx-20 my-10 justify-center">
        <div>
          <img src={assets.logoColorful} alt="" />
        </div>
        <div>
          <h1 className="font-semibold mb-3">Explore</h1>
          <p className="cursor-pointer hover:text-blue-600">Design</p>
          <p className="cursor-pointer hover:text-blue-600">Development Feature</p>
          <p className="cursor-pointer hover:text-blue-600">Prototype</p>
        </div>
        <div>
          <h1 className="font-semibold mb-3">Contact us</h1>
          <p className="cursor-pointer hover:text-blue-600">XAGE , Riyadh, Saudi Arabia</p>
          <p className="cursor-pointer hover:text-blue-600">Info@X-Age.ai</p>
          <p className="cursor-pointer hover:text-blue-600">Design systems</p>
          <p className="cursor-pointer hover:text-blue-600">Collaboration features</p>
          <p className="cursor-pointer hover:text-blue-600">Design process</p>
        </div>
        <div>
          <h1 className="font-semibold mb-3">Resources</h1>
          <p className="cursor-pointer hover:text-blue-600">Colors</p>
          <p className="cursor-pointer hover:text-blue-600">Support</p>
          <p className="cursor-pointer hover:text-blue-600">Profile</p>
          <p className="cursor-pointer hover:text-blue-600">Design process</p>
          <p className="cursor-pointer hover:text-blue-600">Collaboration features</p>
        </div>
        <div className="flex gap-4 mt-5 items-center">
          <img src={assets.X} alt="" />
          <img src={assets.Instagram} alt="" />
          <img src={assets.Youtube} alt="" />
          <img src={assets.Linkedin} alt="" />
        </div>
      </div>
      <div className="flex justify-around items-center py-5 border-t-2 border-gray-300 mx-20">
        <p className="cursor-pointer hover:text-blue-600 font-medium text-sm">Copyright 2025 — XAGE SA</p>
        <p className="cursor-pointer hover:text-blue-600 underline font-medium text-sm">Terms of Service</p>
        <p className="cursor-pointer hover:text-blue-600 underline font-medium text-sm">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
