import { assets } from "../assets/assets";

const Insights = () => {
  return (
    <div id="Insights" className="my-10 px-4 py-20 space-y-10">
      <div className="flex items-center justify-center flex-col">
        {/* Make it from start */}
        <div className="flex flex-col">
          <div className="flex flex-row space-x-1 mt-2 mb-2 justify-start">
            <p className="bg-[#CAA6E2] rounded-full w-3 h-3"></p>
            <p className="bg-[#CAA6E2] rounded-full w-3 h-3"></p>
          </div>
          <h1 className="text-4xl font-semibold text-center">INSIGHTS</h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mx-20">
        <div className="relative mt-25">
          <img className="opacity-70 w-[300px]" src={assets.insight2} alt="" />
          <div className="absolute top-[70%] left-1/4 bg-white px-8 py-4 transform -translate-x-1/4">
            <h1 className="font-semibold text-2xl mb-3">Ideation</h1>
            <p className="text-sm">Collect the pain and requirements. To be moved to the incubation stage</p>
          </div>
        </div>

        <div className="relative mt-25">
          <img className="opacity-70 w-[300px]" src={assets.insight3} alt="" />
          <div className="absolute top-[70%] left-1/4 bg-white px-8 py-4 transform -translate-x-1/4">
            <h1 className="font-semibold text-2xl mb-3">Ideation</h1>
            <p className="text-sm">Collect the pain and requirements. To be moved to the incubation stage</p>
          </div>
        </div>

        <div className="relative mt-25">
          <img className="opacity-70 w-[300px]" src={assets.insight4} alt="" />
          <div className="absolute top-[70%] left-1/4 bg-white px-8 py-4 transform -translate-x-1/4">
            <h1 className="font-semibold text-2xl mb-3">Ideation</h1>
            <p className="text-sm">Collect the pain and requirements. To be moved to the incubation stage</p>
          </div>
        </div>

        <div className="relative mt-25">
          <img className="opacity-70 w-[300px]" src={assets.insight1} alt="" />
          <div className="absolute top-[70%] left-1/4 bg-white px-8 py-4 transform -translate-x-1/4">
            <h1 className="font-semibold text-2xl mb-3">Ideation</h1>
            <p className="text-sm">Collect the pain and requirements. To be moved to the incubation stage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
