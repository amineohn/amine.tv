import { Transition } from "@headlessui/react";
import { Alert } from "../interfaces";
const Alert = ({ show, title, description, width, onClick }: Alert) => {
  return (
    <Transition
      show={show}
      onClick={onClick}
      enter="transition ease-out duration-500 slide-in-top"
      enterFrom="opacity-0"
      enterTo="opacity-100 ease-in duration-500 slide-in-top"
      leave="transition ease-out duration-500 slide-out-top"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 duration-500 slide-out-top"
      className={`flex items-center justify-between w-full flex-wrap bg-gradient-to-tr from-[#6441a5] to-purple-500 p-6 rounded-xl shadow relative transition transform hover:scale-95`}
    >
      <div className="flex px-4 py-5">
        <div className="py-3">
          <svg
            fill="currentColor"
            version="1.1"
            id="lni_lni-twitch"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 64 64"
            className="fill-current h-8 w-8 text-white mr-4"
            xmlSpace="preserve"
          >
            <path
              d="M6.5,1L2.4,11.7v43.5h14.8V63h8.3l7.9-7.9h12l16.2-16.2V1H6.5z M56,36.1l-9.3,9.3H32l-7.9,7.9v-7.9H11.6V6.5H56V36.1
	L56,36.1z M46.8,17.2v16.2h-5.5V17.2H46.8z M32,17.2v16.2h-5.5V17.2H32z"
            />
          </svg>
        </div>
        <div className="flex relative flex-col flex-between">
          <div>
            <p className="font-bold text-xl text-white">{title}</p>
            <p className="text-md text-white">{description}</p>
          </div>
        </div>
      </div>
      <div
        className={`bg-purple-300/40 rounded-xl shadow relative z-50 w-full`}
      >
        <div
          className={`bg-purple-300/60 p-5 w-full h-full rounded-xl transition-all ease-in-out duration-300 z-50`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </Transition>
  );
};
export default Alert;
