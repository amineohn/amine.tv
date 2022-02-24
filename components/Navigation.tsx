import { useRouter } from "next/router";
import Icons from "./Icons";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="container sticky top-0 z-10 px-4 py-2 m-auto mt-5 md:px-2 lg:px-0">
      <div className="flex items-center justify-between flex-wrap bg-[#6441a5] p-6 rounded-xl shadow">
        <div className="flex flex-shrink-0 items-center mr-6 space-x-5 text-white">
          <a
            onClick={() => router.push("/")}
            className="text-lg font-semibold tracking-tight transition transform cursor-pointer lg:text-xl hover:translate-x-3 tracking-in-expand"
          >
            {router.pathname == "/" ? <span className="mr-1">•</span> : ""}
            Amine.tv
          </a>
          <div className="border-r h-8 w-0.5"></div>

          <a
            onClick={() => router.push("/games")}
            className={`text-lg font-semibold tracking-tight transition transform cursor-pointer lg:text-xl hover:translate-x-3`}
          >
            {router.pathname == "/games" ? <span className="mr-1">•</span> : ""}
            Jeux
          </a>
          <a
            onClick={() => router.push("/planning")}
            className="text-lg font-semibold tracking-tight transition transform cursor-pointer lg:text-xl hover:translate-x-3"
          >
            {router.pathname == "/planning" ? (
              <span className="mr-1">•</span>
            ) : (
              ""
            )}
            Planning
          </a>
        </div>
        <div className="inline-flex mt-4 space-x-2 md:mt-0 lg:mt-0">
          <a href="#" className="text-white">
            <Icons
              name="discord"
              className="w-5 h-5 text-white transition transform lg:w-6 lg:h-6 hover:-translate-y-3"
            />
          </a>
          <a href="#" className="text-white">
            <Icons
              name="twitter"
              className="w-5 h-5 text-white transition transform lg:w-6 lg:h-6 hover:-translate-y-3"
            />
          </a>
          <a href="#" className="text-white">
            <Icons
              name="instagram"
              className="w-5 h-5 text-white transition transform lg:w-6 lg:h-6 hover:-translate-y-3"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
