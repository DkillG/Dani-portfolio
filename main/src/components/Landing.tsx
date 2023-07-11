import Viewer from "react-viewer";
import { useEffect, useState } from "react";
import { usePageStore } from "../store/pageStore";

import { Fade } from "react-reveal";

import fireGuy from "../assets/images/fireGuy.svg";
import ellipse_m from "../assets/images/ellipse_m.svg";
import ellipse_s from "../assets/images/ellipse_s.svg";
import ellipse_b from "../assets/images/ellipse_b.svg";
import fireIcon from "../assets/images/fireIcon.svg";
import boomIcon from "../assets/images/boom.svg";
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
            src={ellipse_s}
            className="image-op absolute z-[-1] top-[-20%] left-0 w-1000 h-1000"
            alt="red ellipse"
          />
          <Fade right>
            <div className="flex px-2 md:px-4">
              <div className="mt-48 pl-12">
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
                className="absolute w-65 top-8 md:w-64 sm:top-[-8%] sm:right-8 md:top-12 md:right-8 right-[-50] lg:w-auto lg:right-28 lg:top-[-20%] z-[-1]"
              />
            </div>
          </Fade>
        </div>
      </section>

      {/*Second section*/}
      <section className="mt-24 md:mt-24 px-2 md:px-4" id="About">
        <Fade bottom>
          <div className="flex items-center">
            <img alt="fire multiple colors" className="image-vert w-35 md:w-96 lg:w-auto pl-5" src={fireIcon} />
            <div className="flex flex-col gap-y- gap-x pl-40">
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
      <section className="flex flex-col gap-y-10 mt-[-5%]" id="Projects">
        {/*MyMetaverse project*/}
        <Fade bottom>
          <div className="relative">
            <div className="flex flex-col items-center md:flex-row gap-y-8 px-2 md:px-4">
              <div className="flex flex-col gap-y-4 text-center md:text-left pl-20">
                <h2 className="font-bold text-2xl md:text-4xl">
                  MyMetaverse - Ecosystem
                </h2>
                <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[70%]">
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
                className="w-[26%] pr-10 rounded-[20px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
                alt="MyMetaverse Parallel Planes"
              />
            </div>
            <div className="image-op absolute bottom-[-180%] md:top-0 z-[-1] fixed right-0 flex justify-center items-center">
              <img
              src={ellipse_m}
              className=" w-1000 h-1000"
              alt="blue ellipse"
            /></div>
            
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
              className=" pl-12 w-[30%] md:w-1/2 hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 rounded-[20px]"
              alt="Chainsaw Man Roblox Game"
            />
            <div className="flex flex-col gap-y-4 text-center md:text-left pl-20">
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
            <div className=" pl-20  flex flex-col gap-y-4 text-center md:text-left">
              <h2 className="font-bold text-2xl md:text-4xl">
                Robux Earning Offer Website
              </h2>
              <h3 className="text-secondary-color font-semibold text-lg md:text-2xl md:w-[60%]">
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
              className="w-[25%] pr-10 rounded-[20px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
              alt="Rbxwow earn robux offers"
            />
          </div>
        </Fade>

        {/*Staking project*/}
        <Fade bottom>
          <div className="relative">
            <img
              src={ellipse_b}
              className="image-op absolute z-[-1] bottom-[-100%] left-0 w-1000 h-1000"
              alt="red ellipse"
            />
            <img
            src={boomIcon}
            className="absolute pl-100 w-65 z-[-1] bottom-[-75%] left-[72%] ml-auto"
            alt="boom"  
          />  
          <div className="relative"></div>
            <div className="flex gap-x-32 items-center flex-col md:flex-row gap-y-8 px-2 md:px-4">
              <img
                onClick={() => {
                  setClickVisibleImage();
                  setIndexImage(3);
                }}
                src={cryptoStake}
                className="pl-12 w-[22%] rounded-[20px] hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
                alt="Crypto Staking"
              />
              <div className="pl-20 flex flex-col gap-y-4 text-center md:text-left">
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
