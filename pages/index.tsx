import Navigation from "../components/Navigation";
import type { NextPage } from "next";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import Alert from "../components/Alert";
import Icons from "../components/Icons";
import { TwitchEmbed } from "react-twitch-embed";
import { Dialog, Transition } from "@headlessui/react";
import { configuration } from "../util/configuration";
import { animateScroll as scroll } from "react-scroll";
import { Firebase } from "../structures/firebase";
import { Comments } from "../interfaces";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import FadeIn from "react-fade-in";
import { getDay } from "date-fns";

const Home: NextPage = () => {
  const [show, setShow] = useState(true);
  const [message, setMessage] = useState(true);
  const [width, setWidth] = useState(0);
  const [messageError, setMessageError] = useState(false);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showComment, setShowComment] = useState([{}] as any);
  const [loadTwitch, setLoadTwitch] = useState(false);
  const [open, setOpen] = useState(false);
  const fire = new Firebase();

  // get day and month and year by string
  const currentDate = () => {
    const date = new Date();
    const day = getDay(date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dates = `${day}/${month}/${year} à ${date.getHours()}:${date.getMinutes()}`;
    return dates;
  };

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
  useEffect(() => {
    fire
      .collection("comments")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const comment = snapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().username,
          comment: doc.data().comment,
          createdAt: doc.data().createdAt,
          ...doc.data(),
        }));
        setShowComment(comment);
      });
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" && comment === "") {
      setError("Les champs sont vides");
      setMessageError(true);
      setSuccess(false);
      return;
    } else if (username === "") {
      setError("Le champ pseudo est vide");
      setMessageError(true);
      setSuccess(false);
      return;
    } else if (comment === "") {
      setError("Le champ commentaire est vide");
      setMessageError(true);
      setSuccess(false);
      return;
    }
    if (comment.length > 75) {
      setError("Le commentaire est trop long");
      setMessageError(true);
      setSuccess(false);
      return;
    }
    fire.collection("comments").add({
      username: username,
      comment: comment,
      createdAt: currentDate(),
    });
    setError("");
    setMessageError(false);

    setSuccess(true);
  };
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
            channel={configuration.twitch.twitchUser}
            id="twitch-embed"
            theme="dark"
            withChat={false}
          />
        </Transition>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={setOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="inline-block align-bottom bg-slate-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                >
                  <div>
                    <div>
                      <Transition
                        show={messageError}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-rose-100">
                          <XIcon
                            className="h-6 w-6 text-rose-600"
                            aria-hidden="true"
                          />
                        </div>
                      </Transition>

                      <div className="mt-3 text-center sm:mt-5">
                        <Transition
                          show={success}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100">
                            <CheckIcon
                              className="h-6 w-6 text-emerald-600"
                              aria-hidden="true"
                            />
                          </div>
                        </Transition>
                        <Transition
                          show={messageError}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-rose-400"
                          >
                            {error}
                          </Dialog.Title>
                        </Transition>
                        {messageError ? (
                          <></>
                        ) : (
                          <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-gray-50"
                          >
                            Ajouter un commentaire
                          </Dialog.Title>
                        )}
                        <div className="mt-2">
                          <div className="mt-2 flex flex-col items-center justify-center space-y-3">
                            <div className="mt-1 rounded-md shadow-sm">
                              <label
                                htmlFor="username"
                                className="block text-sm text-left p-0.5 font-medium leading-5 text-gray-50"
                              >
                                Pseudo
                              </label>
                              <input
                                id="username"
                                type="text"
                                placeholder="Pseudo"
                                value={username}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-input block placeholder-gray-50 font-medium transition duration-150 ease-in-out sm:text-sm sm:leading-5 px-2 py-2 rounded-lg bg-slate-800 border-2 border-slate-800 focus:outline-none text-gray-50"
                              />
                              <label
                                htmlFor="comment"
                                className="block text-sm text-left p-0.5 font-medium leading-5 text-gray-50"
                              >
                                Commentaire
                              </label>
                              <textarea
                                id="comment"
                                placeholder="Commentaire"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="form-input w-80 block placeholder-gray-50 font-medium transition duration-150 ease-in-out sm:text-sm sm:leading-5 px-2 py-2 rounded-lg bg-slate-800 border-2 border-slate-800 focus:outline-none text-gray-50"
                              />
                            </div>
                            <div className="w-80 h-1 bg-slate-700/60 rounded-xl">
                              <div
                                className={`h-1 ${
                                  comment.length > 20
                                    ? "bg-rose-500"
                                    : "bg-[#6444a4]"
                                } rounded-xl transition-all ease-in-out duration-200 max-w-[320px]`}
                                style={{ width: `${comment.length}%` }}
                              />
                            </div>
                            <span
                              className={`text-white px-5 py-2 rounded-xl transition-all ease-in-out duration-300 ${
                                comment.length > 20
                                  ? "bg-rose-500"
                                  : "bg-[#6444a4]"
                              }`}
                            >
                              Attention, il vous reste{" "}
                              <span className="font-medium">
                                {75 - comment.length}
                              </span>{" "}
                              caractères
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 flex justify-center items-center">
                      <button
                        type="submit"
                        className="focus:outline-none relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#6444a4]/90 rounded-xl group"
                      >
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#6444a4] rounded group-hover:-mr-4 group-hover:-mt-4">
                          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-slate-900"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#6444a4]/95 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                          Ajouter
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <FadeIn>
          <div className="relative w-full flex gap-6 snap-x overflow-auto pt-18">
            <div className="snap-center shrink-0">
              <div className="shrink-0 w-4 sm:w-48"></div>
            </div>
            {showComment.map((item: Comments, index: string) => (
              <FadeIn
                key={index}
                className="snap-center shrink-0 first:pl-8 last:pr-8 pb-4"
              >
                <div className="shrink-0 w-80 h-40 rounded-xl shadow-xl bg-gray-50">
                  <div className="flex justify-between px-5 py-4 flex-col">
                    <div>
                      <p
                        className={`text-gray-800 font-medium text-lg ${
                          item.comment.length > 60 ? "truncate" : ""
                        }`}
                      >
                        &laquo; {item.comment} &raquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                        <img src="https://rairaksa.github.io/assets/img/rai.jpg" />
                      </div>
                      <div className="flex flex-col tracking-wider">
                        <label className="text-gray-900 font-bold text-md">
                          {item.username}
                        </label>
                        <label className="text-gray-800 font-normal text-sm">
                          {item.createdAt}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="snap-center shrink-0">
              <div className="shrink-0 w-4 sm:w-48"></div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="flex justify-center items-center">
          <a
            className="relative inline-block text-lg group cursor-pointer"
            onClick={() => (!open ? setOpen(true) : setOpen(false))}
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#6444a4] rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-64 h-64 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#6444a4] group-hover:-rotate-180 ease"></span>
              <span className="relative">Ajouter un commentaire</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#6444a4] rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </FadeIn>
        <FadeIn
          className={`${
            show
              ? " transition-all ease-in-out duration-300"
              : " transition-all ease-in-out duration-300 "
          } transition transform hover:-translate-y-3 cursor-pointer hover:bg-white bg-[#6444a4] w-full h-[400px] rounded-xl hover:text-[#6444a4] text-white`}
        >
          <div
            className="flex justify-center items-center"
            onClick={() =>
              window.open(
                `https://twitch.tv/${configuration.twitch.twitchUser}`
              )
            }
          >
            <Icons name="twitchlogo" className="w-96 h-96" />
          </div>
        </FadeIn>
      </div>
      <FadeIn className="fixed bottom-0 right-0 px-5 py-5">
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

export default Home;
