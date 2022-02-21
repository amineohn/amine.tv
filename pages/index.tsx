import Navigation from "../components/Navigation";
import type { NextPage } from "next";
import React, { useState } from "react";
import { useEffect } from "react";
import Alert from "../components/Alert";
import Icons from "../components/Icons";
const Home: NextPage = () => {
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(0);
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
        }, 1000);
        break;
      case 10:
        setTimeout(() => {
          setWidth(20);
        }, 1000);
        break;
      case 20:
        setTimeout(() => {
          setWidth(30);
        }, 1000);
        break;
      case 30:
        setTimeout(() => {
          setWidth(40);
        }, 1000);
        break;

      case 40:
        setTimeout(() => {
          setWidth(50);
        }, 1000);
        break;
      case 50:
        setTimeout(() => {
          setWidth(60);
        }, 1000);
        break;
      case 60:
        setTimeout(() => {
          setWidth(70);
        }, 1000);
        break;

      case 70:
        setTimeout(() => {
          setWidth(80);
        }, 1000);
        break;
      case 80:
        setTimeout(() => {
          setWidth(90);
        }, 1000);
        break;
      case 90:
        setTimeout(() => {
          setWidth(100);
        }, 1000);
        break;
      default:
        break;
    }
  }, [width]);

  return (
    <>
      <Navigation />
      <div className="mt-5 w-full container m-auto space-y-6">
        <Alert
          show={show}
          title="Alerte"
          description="Amine vient de lancer un live sur Twitch"
          width={`${width}`}
          onClick={() =>
            window.open(`https://twitch.tv/${process.env.TWITCH_CHANNEL}`)
          }
        />
        <div
          className={`${
            show
              ? " transition-all ease-in-out duration-300"
              : " transition-all ease-in-out duration-300 "
          } bg-[url('https://wallpaperaccess.com/full/6091442.jpg')] w-full h-[400px] rounded-xl transition`}
        ></div>
      </div>
      <div className="absolute bottom-0 right-0 px-5 py-5">
        <button className="bg-purple-500 px-2 py-2 rounded-full transition transform hover:-translate-y-3">
          <Icons name="arrow-top" className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
};

export default Home;
