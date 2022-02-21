import Icons from "./Icons";

const Navigation = () => {
  return (
    <nav className="container m-auto mt-5 px-0 md:px-2 lg:px-0">
      <div className="flex items-center justify-between flex-wrap bg-gradient-to-tr from-[#6441a5] to-purple-500 p-6 rounded-xl shadow">
        <div className="flex items-center flex-shrink-0 text-white mr-6 space-x-5">
          <a
            href="#"
            className="font-semibold text-lg lg:text-xl tracking-tight transition transform hover:translate-x-3"
          >
            Amine.tv
          </a>
          <a
            href="#"
            className="font-semibold text-lg lg:text-xl tracking-tight transition transform hover:translate-x-3"
          >
            A propos
          </a>
          <a
            href="#"
            className="font-semibold text-lg lg:text-xl tracking-tight transition transform hover:translate-x-3"
          >
            Planning
          </a>
        </div>
        <div className="inline-flex space-x-2 md:mt-0 lg:mt-0 mt-4">
          <a href="#" className="text-white">
            <Icons
              name="discord"
              className="w-5 h-5 lg:w-6 lg:h-6 text-white transition transform hover:-translate-y-3"
            />
          </a>
          <a href="#" className="text-white">
            <Icons
              name="twitter"
              className="w-5 h-5 lg:w-6 lg:h-6 text-white transition transform hover:-translate-y-3"
            />
          </a>
          <a href="#" className=" text-white">
            <Icons
              name="instagram"
              className="w-5 h-5 lg:w-6 lg:h-6 text-white transition transform hover:-translate-y-3"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
