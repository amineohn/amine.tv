import { Transition } from "@headlessui/react";
import { Alert } from "../interfaces";
import Icons from "./Icons";
import FadeIn from "react-fade-in";
const Alert = ({
  show,
  title,
  description,
  width,
  onClick,
  disableProgress,
  backgroundColor,
}: Alert) => {
  return (
    <>
      <FadeIn>
        <Transition
          show={show}
          onClick={onClick}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100 ease-in duration-500"
          leave="transition ease-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 duration-500"
          className={`flex items-center justify-between w-full flex-wrap ${backgroundColor} p-6 rounded-xl shadow transition-all ease-in-out relative hover:transition hover:transform hover:scale-95`}
        >
          <div className="flex px-4 py-5">
            <div className="py-3">
              <Icons
                name="twitch"
                className="fill-current h-8 w-8 text-black mr-4"
              />
            </div>
            <div className="flex relative flex-col flex-between">
              <div>
                <p className="font-bold text-xl text-white">{title}</p>
                <p className="text-md text-white">{description}</p>
              </div>
            </div>
          </div>
          {!disableProgress && (
            <div
              className={`bg-purple-300/40 rounded-xl shadow relative w-full`}
            >
              <div
                className={`bg-purple-300/60 p-5 w-full h-full rounded-xl transition-all ease-in-out duration-300 `}
                style={{ width: `${width}%` }}
              ></div>
            </div>
          )}
        </Transition>
      </FadeIn>
    </>
  );
};
export default Alert;
