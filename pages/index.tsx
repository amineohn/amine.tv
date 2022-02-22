import Navigation from "../components/Navigation";
import type { NextPage } from "next";
import React, { useState } from "react";
import { useEffect } from "react";
import Alert from "../components/Alert";
import Icons from "../components/Icons";
import { TwitchEmbed } from "react-twitch-embed";
import { Transition } from "@headlessui/react";
import { configuration } from "../util/configuration";
import { animateScroll as scroll } from "react-scroll";

const Home: NextPage = () => {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState(true);
  const [width, setWidth] = useState(0);

  const [loadTwitch, setLoadTwitch] = useState(false);
  useEffect(() => {
    if (width === 100) {
      setWidth(100);
      setTimeout(() => {
        setShow(false);
      }, 700);
    }
    switch (width) {
      case 0:
        setTimeout(() => {
          setWidth(10);
          setLoadTwitch(false);
        }, 1000);
        break;
      case 10:
        setTimeout(() => {
          setWidth(20);
          setLoadTwitch(false);
        }, 1000);
        break;
      case 20:
        setTimeout(() => {
          setWidth(30);
          setLoadTwitch(false);
        }, 1000);
        break;
      case 30:
        setTimeout(() => {
          setWidth(40);
          setLoadTwitch(false);
        }, 1000);
        break;

      case 40:
        setTimeout(() => {
          setWidth(50);
          setLoadTwitch(false);
        }, 1000);
        break;
      case 50:
        setTimeout(() => {
          setWidth(60);
          setLoadTwitch(false);
        }, 1000);
        break;
      case 60:
        setTimeout(() => {
          setWidth(70);
          setLoadTwitch(false);
        }, 1000);
        break;

      case 70:
        setTimeout(() => {
          setWidth(80);
          setLoadTwitch(false);
        }, 1000);
        break;
      case 80:
        setTimeout(() => {
          setWidth(90);
          setLoadTwitch(false);
        }, 1000);
        break;
      case 90:
        setTimeout(() => {
          setWidth(100);
        }, 1000);
        setTimeout(() => {
          setLoadTwitch(true);
        }, 1000);
        break;
      default:
        break;
    }
  }, [width]);

  return (
    <>
      <Navigation />
      <div className="mt-2 w-full container m-auto space-y-6 py-4 lg:px-0 px-4">
        <Alert
          show={message}
          title="Bienvenue sur mon site ! "
          description="Je suis un jeune streameur passionné par l'informatique et le gaming."
          disableProgress={true}
          backgroundColor="bg-gradient-to-bl from-fuchsia-600 to-pink-600"
          onClick={() => null}
        />
        <Alert
          show={show}
          title="Alerte"
          description="Amine vient de lancer un live sur Twitch"
          width={`${width}`}
          disableProgress={false}
          backgroundColor="bg-gradient-to-tr from-[#6441a5] to-purple-500"
          onClick={() =>
            window.open(`https://twitch.tv/${configuration.twitch.twitchUser}`)
          }
        />
        <Transition
          show={loadTwitch}
          enter="transition ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100 ease-in duration-500"
          leave="transition ease-out duration-500 "
          leaveFrom="opacity-100"
          leaveTo="opacity-0 duration-500 "
        >
          <TwitchEmbed
            channel="tsuchiyakeiichi"
            id="twitch-embed"
            theme="dark"
            withChat={false}
          />
        </Transition>

        <div
          className={`${
            show
              ? " transition-all ease-in-out duration-300"
              : " transition-all ease-in-out duration-300 "
          } bg-[#6444a4] w-full h-[400px] rounded-xl transition`}
        >
          <div className="flex justify-center items-center">
            <Icons
              name="twitchlogo"
              className="w-96 h-96 text-white transition transform hover:-translate-y-3"
            />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 px-5 py-5">
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

export default Home;
