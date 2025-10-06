import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    // run once to set initial state
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div
        className={`hidden sm:flex sm:flex-row space-x-5 px-2 py-0 items-center justify-between top-0 z-50 sticky transition-colors duration-300 ${
          scrolled ? "bg-white text-gray-900 shadow" : "bg-gradient-to-bl from-[#301E7D] to-[#2B3155] text-white"
        }`}
      >
        <img className={`w-[58px] ${scrolled ? "filter invert" : "filter-none"} `} src={assets.logo} alt="" />
        <div className="flex-1">
          <ul className="flex flex-row justify-end items-end space-x-5">
            <a href="#Products" className="cursor-pointer hover:text-blue-500">Products</a>
            <a href="#Services" className="cursor-pointer hover:text-blue-500">Services</a>
            <a href="#AboutUs" className="cursor-pointer hover:text-blue-500">About Us</a>
            <a href="#Insights" className="cursor-pointer hover:text-blue-500">Insights</a>
          </ul>
        </div>
        <button className={`${scrolled ? "bg-blue-600 text-white" : "bg-blue-500 text-white"} px-4 py-2 rounded`}>Get a Demo</button>
      </div>

      <label className="swap swap-rotate sm:hidden absolute m-4 z-11 flex invert pl-3">
        {/* this hidden checkbox controls the state */}
        <input onClick={() => setVisible(true)} type="checkbox" />

        {/* hamburger icon */}
        <svg className="fill-current absolute" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </label>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-12 ${visible ? "w-full h-fit" : "w-0"} `}>
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center justify-end gap-4 p-2 cursor-pointer">
            {/* close icon */}
            <svg onClick={() => setVisible(false)} className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center mb-5 mt-0">
            <img className="w-[100px] invert" src={assets.logo} alt="Logo" />
          </div>
          <div className="flex flex-col gap-4 w-full items-start justify-start mx-6 px-4 py-3">
            <a onClick={() => setVisible(false)} className="py-2 pl-4 font-semibold" href="#Products">
              Products
            </a>
            <a onClick={() => setVisible(false)} className="py-2 pl-4 font-semibold" href="#Services">
              Services
            </a>
            <a onClick={() => setVisible(false)} className="py-2 px-4 font-semibold" href="#AboutUs">
              About Us
            </a>
            <a onClick={() => setVisible(false)} className="py-2 pl-4 font-semibold" href="#Insights">
              Insights
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-32">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Get a Demo</button>
          <div className="flex gap-4 items-center justify-center mt-6">
            <img src={assets.Instagram} alt="" />
            <img src={assets.X} alt="" />
            <img src={assets.Youtube} alt="" />
            <img src={assets.Linkedin} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
