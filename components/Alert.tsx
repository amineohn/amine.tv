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
  hover,
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
          className={`flex relative flex-wrap justify-between items-center p-6 w-full rounded-xl shadow transition-all ease-in-out ${backgroundColor} ${hover}`}
        >
          <div className="flex px-4 py-5">
            <div className="py-3">
              <Icons
                name="twitch"
                className="mr-4 w-8 h-8 text-black fill-current"
              />
            </div>
            <div className="flex relative flex-col flex-between">
              <div>
                <p className="text-xl font-bold text-white">{title}</p>
                <p className="text-white text-md">{description}</p>
              </div>
            </div>
          </div>
          {!disableProgress && (
            <div
              className={`relative w-full rounded-xl shadow bg-purple-300/40`}
            >
              <div
                className={`p-5 w-full h-full rounded-xl transition-all duration-300 ease-in-out bg-purple-300/60`}
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
