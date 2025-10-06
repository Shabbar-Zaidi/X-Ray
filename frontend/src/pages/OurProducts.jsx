import Cardly from "../components/Cardly";
import DigitalOnboarding from "../components/DigitalOnboarding";
import SmartMirror from "../components/SmartMirror";

const OurProducts = () => {
  return (
    <div className="bg-[#F0EFF6] flex flex-col gap-20 mt-20" id="Products">
      <h1 className="text-4xl mt-30 font-bold text-right mr-5">▶ OUR PRODUCTS</h1>
      <div className="hidden sm:block">
        <DigitalOnboarding />
        <SmartMirror />
        <Cardly />
      </div>
      {/* name of each tab group should be unique */}
      <div className="block sm:hidden">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border">
          <input type="radio" name="my_tabs_2" className="tab" aria-label="Digital Onboarding" defaultChecked />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <DigitalOnboarding />
          </div>

          <input type="radio" name="my_tabs_2" className="tab" aria-label="Smart Mirror" />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <SmartMirror />
          </div>

          <input type="radio" name="my_tabs_2" className="tab" aria-label="Cardly" />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            <Cardly />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Get a Demo</button>
      </div>
    </div>
  );
};

export default OurProducts;
