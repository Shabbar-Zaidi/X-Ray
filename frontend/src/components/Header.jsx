import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 space-y-2 items-center bg-gradient-to-bl from-[#301E7D] to-[#2B3155] text-white relative sm:px-8">
      <div className="flex flex-col px-20 py-12 sm:items-start sm:justify-start justify-center items-center w-full sm:w-1/2 space-y-4">
        <img src={assets.logo} className="w-[123px] h-[165px]" alt="" />
        <h1 className="text-2xl">Feel the future</h1>
        <h1 className="text-3xl font-bold sm:text-start text-center text-[#47E9FF]">
          Where emerging Tech <br /> meets impact
        </h1>
        <p className="mt-2 font-light text-center sm:text-start">VR Powering the future of businessCardly One tap for connection from connection</p>
        <button className="bg-[#47E9FF] text-black py-2 px-4 rounded mt-5">Get Started</button>
      </div>

      {/* Right Side */}
      <div className="h-64 w-full sm:w-1/2">
        <img className="absolute w-[250px] sm:w-[350px] right-4 bottom-0" src={assets.group} alt="" />
        <img className="absolute w-[180px] sm:w-[290px] right-0 bottom-0" src={assets.man} alt="" />
      </div>
    </div>
  );
};

export default Header;
