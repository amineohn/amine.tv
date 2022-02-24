import Icons from "../components/Icons";
import Navigation from "../components/Navigation";
import { animateScroll as scroll } from "react-scroll";

const Planning = () => {
  return (
    <>
      <Navigation />
      <div className="container px-4 py-4 m-auto mt-2 space-y-6 w-full lg:px-0">
        <div className="flex justify-center items-center">
          <div className={`flex justify-center items-center w-full text-white`}>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 xl:grid-cols-7 md:grid-cols-3 sm:grid-cols-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0 bottom-0 px-5 py-5">
        <button
          onClick={() => scroll.scrollToTop()}
          className="bg-[#6444a4] px-2 py-2 rounded-full transition transform hover:-translate-y-3 shadow-xl"
        >
          <Icons name="arrow-top" className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
};
export default Planning;
