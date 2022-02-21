import { useRouter } from "next/router";
import Icons from "./Icons";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="container m-auto mt-5 py-2 md:px-2 sticky top-0 z-50 lg:px-0 px-4">
      <div className="flex items-center justify-between flex-wrap bg-[#6441a5] p-6 rounded-xl shadow">
        <div className="flex items-center flex-shrink-0 text-white mr-6 space-x-5">
          <a
            onClick={() => router.push("/")}
            className="font-semibold text-lg lg:text-xl tracking-tight transition transform hover:translate-x-3 tracking-in-expand cursor-pointer"
          >
            Amine.tv
          </a>
          <div className="border-r h-8 w-0.5"></div>
          <a
            onClick={() => router.push("/games")}
            className="font-semibold text-lg lg:text-xl tracking-tight transition transform hover:translate-x-3 cursor-pointer"
          >
            Jeux
          </a>
          <a
            onClick={() => router.push("/planning")}
            className="font-semibold text-lg lg:text-xl tracking-tight transition transform hover:translate-x-3 cursor-pointer"
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
