import { assets } from "../assets/assets";

const InfoSection = () => {
  return (
    <div className="flex flex-col justify-between my-20 mx-20">
      <div className="relative flex flex-col md:flex-row-reverse justify-between space-y-10">
        <p className="text-sm my-15 text-[#2F2472] bg-white sm:px-8 sm:text-2xl">
          We are company emphasizing on Growth Mindset, iterative enhancement in our product and services starting from idea to scaling and product market fit, with our clients in order to{" "}
          <span className="font-bold">Bridge the INNOVATION Gap</span>
        </p>
        <img className="h-[631px] w-1/2" src={assets.Rectangle} alt="" />

        <p className="absolute top-[70%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 font-bold w-[90%] text-[#2F2472] bg-white text-sm sm:px-15 px-4 py-10 items-center shadow-lg sm:text-lg">
          Our mission is to enable the latest digital solutions and creative products to improve quality, user experience, and promotion of digital culture
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
