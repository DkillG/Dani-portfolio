import Viewer from "react-viewer";
import { useEffect, useState } from "react";
import { usePageStore } from "../store/pageStore";

import { Fade } from "react-reveal";

import fireGuy from "../assets/images/fireGuy.svg";
import fireIcon from "../assets/images/fireIcon.svg";
import ellipse_1 from "../assets/images/ellipse_2.webp";
import ellipse_2 from "../assets/images/ellipse_4.webp";
import ellipse_4 from "../assets/images/ellipse_6.webp";
import chainsawManRoblox from "../assets/images/ChainsawManRoblox.webp";

import RbxWowPreview from "../assets/images/Rbxwow_preview.svg";
import cryptoStake from "../assets/images/CryptoStake_preview.svg";
import myMetaversePreview from "../assets/images/mymetaverse_preview.webp";

const Landing = () => {
  const [visibleImage, setVisibleImage] = useState(false);
  const [indexImage, setIndexImage] = useState(0);
  const { toast, setup } = usePageStore();

  const setClickVisibleImage = () => {
    setVisibleImage(true);
  };

  useEffect(() => {
    const debounce = setTimeout(() => setup({ toast: "" }), 3000);

    return () => {
      clearTimeout(debounce);
    };
  }, [toast]);

  return (
    <main className="mt-24 text-white">
      <Viewer
        onClose={() => {
          setVisibleImage(false);
        }}
        visible={visibleImage}
        images={[
          {
            src: myMetaversePreview,
            alt: "MyMetaverse Parallel Planes",
          },
          {
            src: chainsawManRoblox,
            alt: "Chainsaw Man Roblox Game",
          },
          {
            src: RbxWowPreview,
            alt: "Robux earning offer",
          },
          {
            src: cryptoStake,
            alt: "Crypto Staking site",
          },
        ]}
        activeIndex={indexImage}
        zIndex={10000}
        className=""
      />
      {toast.length ? (
        <div className="message-animated fixed duration-300 ease-in-out right-8 top-32 rounded-xl p-4 red-gradient z-[100]">
          <h3 className="font-semibold text-lg">{toast}</h3>
        </div>
      ) : (
        <></>
      )}

      {/*First section*/}
      <section id="Home">
        <div className="relative">
          <img
            src={ellipse_1}
            className="image-op absolute z-[-1] top-[-25%] left-[-5%]"
            alt="red ellipse"
          />
          <Fade right>
            <div className="flex px-2 md:px-4">
              <div className="mt-48">
                <h1 className="font-bold text-5xl md:text-7xl">
                  Hi, I'm Daniel
                </h1>
                <h2 className="primary-gradient font-bold text-3xl md:text-6xl">
                  Full-Stack Developer
                </h2>
                <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[80%] lg:w-[40%] mt-8">
                  Check out my portfolio showcasing my 5-year journey in
                  programming. I specialize in web development languages and
                  frameworks. Explore my projects and feel free to reach out for
                  collaboration opportunities.
                </h3>
              </div>
              <img
                src={fireGuy}
                alt="Fire guy head colors"
                className="absolute w-64 top-8 md:w-64 sm:top-[-8%] sm:right-8 md:top-12 md:right-8 right-0 lg:w-auto lg:right-28 lg:top-[-20%] z-[-1]"
              />
            </div>
          </Fade>
        </div>
      </section>

      {/*Second section*/}
      <section className="mt-24 md:mt-24 px-2 md:px-4" id="About">
        <Fade bottom>
          <div className="flex items-center">
            <img alt="fire multiple colors" className="image-vert w-32 md:w-96 lg:w-auto" src={fireIcon} />
            <div className="flex flex-col gap-y-4">
              <h2 className="font-bold text-2xl md:text-6xl">Skills</h2>
              <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[80%]">
                Experienced in Lua, Python, JS, TS, Solidity, MongoDB, React,
                Node, REST APIs, GraphQL, Web3, WebSockets, Figma and more.
              </h3>
            </div>
          </div>
        </Fade>
      </section>

      {/*Third section*/}
      <section className="flex flex-col gap-y-44 mt-52" id="Projects">
        {/*MyMetaverse project*/}
        <Fade bottom>
          <div className="relative">
            <div className="flex flex-col-reverse items-center md:flex-row gap-y-8 px-2 md:px-4">
              <div className="flex flex-col gap-y-4 text-center md:text-left">
                <h2 className="font-bold text-2xl md:text-4xl">
                  MyMetaverse - Ecosystem
                </h2>
                <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[80%]">
                  MyMetaverse harnesses the power of gaming, blockchain, AR, and
                  AI to help brands, game studios, and app developers reach new
                  heights of marketing success, customer retention, and
                  monetization. Built with SCSS, React, TypeScript, Next.js.
                  Explore unique digital assets for secure trading. Enhance your
                  gaming experience.
                </h3>
                <button className="w-24 hover:scale-110 transition-all ease-in-out duration-500 font-semibold red-gradient px-4 py-1 rounded-md">
                  <a href="https://mymetaverse.io/" target="_blank">
                    Go it!
                  </a>
                </button>
              </div>
              <img
                onClick={() => {
                  setClickVisibleImage();
                  setIndexImage(0);
                }}
                src={myMetaversePreview}
                className="w-96 rounded-[20px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
                alt="MyMetaverse Parallel Planes"
              />
            </div>
            <img
              src={ellipse_2}
              className="absolute w-full h-full bottom-0 md:top-0 z-[-1]"
              alt="blue ellipse"
            />
          </div>
        </Fade>

        {/*Chainsaw Man project*/}
        <Fade bottom>
          <div className="flex gap-x-32 items-center flex-col md:flex-row gap-y-8 px-2 md:px-4">
            <img
              onClick={() => {
                setClickVisibleImage();
                setIndexImage(1);
              }}
              src={chainsawManRoblox}
              className="rounded-[20px] w-full md:w-1/2 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
              alt="Chainsaw Man Roblox Game"
            />
            <div className="flex flex-col gap-y-4 text-center md:text-left">
              <h2 className="font-bold text-2xl md:text-4xl">
                Chainsaw Man Game
              </h2>
              <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[80%]">
                I created an exciting Chainsaw Man game using Lua language in
                the Roblox platform. Dive into a world full of action and
                challenges as you explore settings inspired by the popular
                series. Showcase your skills and survive epic battles with the
                iconic Denji!
              </h3>
              <button className="w-24 hover:scale-110 transition-all ease-in-out duration-500 font-semibold red-gradient px-4 py-1 rounded-md">
                <a
                  href="https://www.roblox.com/games/9240108258/Chainsaw-Man-Devil-Hunters"
                  target="_blank"
                >
                  Play it!
                </a>
              </button>
            </div>
          </div>
        </Fade>

        {/*RbxWOW project*/}
        <Fade bottom>
          <div className="flex flex-col-reverse items-center md:flex-row gap-y-8 px-2 md:px-4">
            <div className="flex flex-col gap-y-4 text-center md:text-left">
              <h2 className="font-bold text-2xl md:text-4xl">
                Robux Earning Offer Website
              </h2>
              <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[80%]">
                I designed and developed RbxWow, a platform where users can
                complete offers to earn Robux. Utilizing TypeScript, React, and
                SCSS, I crafted a user-friendly interface. Behind the scenes, I
                created a server, a MongoDB database, and a RESTful API.
                Leveraging various Roblox APIs, users can seamlessly connect
                their accounts and earn Robux by completing offers. Join RbxWow
                and unlock exciting opportunities to enhance your Roblox
                experience.
              </h3>
              <button className="w-24 hover:scale-110 transition-all ease-in-out duration-500 font-semibold red-gradient px-4 py-1 rounded-md">
                <a href="https://www.rbxwow.com" target="_blank">
                  Go it!
                </a>
              </button>
            </div>
            <img
              onClick={() => {
                setClickVisibleImage();
                setIndexImage(2);
              }}
              src={RbxWowPreview}
              className="w-96 rounded-[20px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
              alt="Rbxwow earn robux offers"
            />
          </div>
        </Fade>

        {/*Staking project*/}
        <Fade bottom>
          <div className="relative">
            <img
              src={ellipse_4}
              className="absolute w-full md:w-2/3 h-[70rem] bottom-0 left-0 z-[-1]"
              alt="red ellipse"
            />
            <div className="flex gap-x-32 items-center flex-col md:flex-row gap-y-8 px-2 md:px-4">
              <img
                onClick={() => {
                  setClickVisibleImage();
                  setIndexImage(3);
                }}
                src={cryptoStake}
                className="w-96 rounded-[20px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
                alt="Crypto Staking"
              />
              <div className="flex flex-col gap-y-4 text-center md:text-left">
                <h2 className="font-bold text-2xl md:text-4xl">
                  Crypto Staking Website
                </h2>
                <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[80%]">
                  I developed a staking website using TypeScript, React,
                  TailwindCSS and Web3. Additionally, I created the smart
                  contract in Solidity for this website. Experience seamless
                  user interface and interact with the blockchain to securely
                  stake your tokens. Earn rewards and participate in the
                  decentralized finance ecosystem with ease.
                </h3>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </main>
  );
};

export default Landing;
