import { Fragment, useEffect, useState } from "react";
import { configuration } from "../util/configuration";
import { Games } from "../interfaces";
import Navigation from "../components/Navigation";
import Icons from "../components/Icons";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const MyGames = () => {
  const [data, setData] = useState([{}] as any);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(data.data);
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

  const filtered =
    query === ""
      ? data
      : data.filter((item: Games) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <>
      <Navigation />
      <div className="mt-2 w-full container m-auto space-y-6 py-4 lg:px-0 px-4">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <div className="w-72">
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="relative w-full text-left bg-white rounded-xl  shadow-md cursor-default focus:outline-none  sm:text-sm overflow-hidden">
                  <Combobox.Input
                    className="w-full focus:outline-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                    displayValue={(item: Games) => item.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filtered.length === 0 && query !== "" ? (
                      <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filtered.map((item: Games) => (
                        <Combobox.Option
                          key={item.id}
                          className={({ active }) =>
                            `cursor-default select-none relative py-2 pl-10 pr-4 ${
                              active
                                ? "text-white bg-[#6444a4]"
                                : "text-gray-900"
                            }`
                          }
                          value={item}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-[#6444a4]"
                                  }`}
                                >
                                  <CheckIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
          <div className="grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2">
            {filtered ? (
              <>
                {data.map((item: Games) => (
                  <>
                    <div className="space-y-4">
                      <div className="px-2 py-2 rounded-xl bg-white font-medium">
                        <p>{item.name}</p>
                      </div>
                      <img
                        className="rounded-xl"
                        src={item.box_art_url
                          ?.replace("{width}", "250")
                          ?.replace("{height}", "300")}
                      />
                    </div>
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
      <div className="fixed bottom-0 right-0 px-5 py-5">
        <button className="bg-[#6444a4] px-2 py-2 rounded-full transition transform hover:-translate-y-3 shadow-xl">
          <Icons name="arrow-top" className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
};
export default MyGames;
