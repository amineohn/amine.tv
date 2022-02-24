import { useEffect, useState } from "react";
import { configuration } from "../util/configuration";
import { Games } from "../interfaces";
import Navigation from "../components/Navigation";
import Icons from "../components/Icons";
import { animateScroll as scroll } from "react-scroll";
import FadeIn from "react-fade-in";
const MyGames = () => {
  const [data, setData] = useState([{}] as any);
  const api = async () => {
    const response = await fetch(`https://api.twitch.tv/helix/games/top`, {
      headers: {
        "Client-ID": `${configuration.twitch.clientId}`,
        Authorization: `Bearer ${configuration.twitch.clientSecret}`,
      },
    });
    const data = await response.json();
    setData(data.data);
  };
  useEffect(() => {
    api();
  }, []);
  const array = Array(10).fill(0);
  return (
    <>
      <Navigation />
      <div className="container px-4 py-4 m-auto mt-2 space-y-6 w-full lg:px-0">
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
            {data ? (
              <>
                {data.map((item: Games) => (
                  <>
                    <FadeIn className="space-y-4">
                      <div className="px-2 py-2 font-medium bg-white rounded-xl">
                        <p>{item.name}</p>
                      </div>
                      <img
                        className="rounded-xl"
                        src={item.box_art_url
                          ?.replace("{width}", "250")
                          ?.replace("{height}", "300")}
                      />
                    </FadeIn>
                  </>
                ))}
              </>
            ) : (
              <>
                {array.map((item: number) => (
                  <>
                    <div key={item} className="space-y-4">
                      <div className="w-[250px] h-[300px] bg-[#6444a4] rounded-lg animate-pulse"></div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <FadeIn className="fixed right-0 bottom-0 px-5 py-5">
        <button
          onClick={() => scroll.scrollToTop()}
          className="bg-[#6444a4] px-2 py-2 rounded-full transition transform hover:-translate-y-3 shadow-xl"
        >
          <Icons name="arrow-top" className="w-6 h-6 text-white" />
        </button>
      </FadeIn>
    </>
  );
};
export default MyGames;
