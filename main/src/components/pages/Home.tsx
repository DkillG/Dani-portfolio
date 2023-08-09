import { LazyLoadImage } from "react-lazy-load-image-component";
import ellipse_s from "../../assets/images/ellipse_s.svg";
import fireGuy from "../../assets/images/fireGuy.webp";
import { usePageStore } from "../../store/pageStore";
import { useState } from "react";
import Audible from "../Audible";

const Home = () => {
  const [loadImage, setLoadImage] = useState(false);

  const { setup } = usePageStore();

  return (
    <section id="Home">
      <div className="relative">
        <img
          src={ellipse_s}
          alt="Red light flash"
          className="absolute z-[-1] -top-32 image-op"
        />
        <div
          className={`px-2 md:px-4 lg:px-0 ${
            loadImage ? "opacity-100" : "translate-x-96 opacity-0"
          } duration-200 ease-in-out`}
        >
          <div className="flex items-center justify-center md:justify-between lg:justify-center relative">
            <div className="flex lg:w-[50%] flex-col gap-y-6">
              <div className="flex flex-col items-center md:items-start gap-y-1">
                <h1 className="font-bold text-4xl lg:text-6xl">
                  Hi, I'm Daniel
                </h1>
                <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl primary-gradient">
                  Full-Stack Developer
                </h2>
              </div>
              <h3 className="font-semibold text-sm md:text-xl text-center md:text-left md:text-balance lg:text-2xl text-secondary-color">
                +5 years of experience programming. Specialized in web
                development languages and frameworks
              </h3>
              <div className="flex justify-center text-xs md:text-base gap-x-8 md:justify-normal md:gap-x-12">
                <Audible>
                  <a
                    onClick={() => setup({ section: "Projects" })}
                    target="_blank"
                    className="border border-primary-color px-2 py-2 md:px-6 rounded-lg hover:bg-primary-color hover:cursor-pointer duration-300 ease-out"
                  >
                    Projects
                  </a>
                </Audible>
                <Audible>
                  <button
                    onClick={() => setup({ section: "Contact" })}
                    className="bg-primary-color px-2 md:px-6 rounded-lg border border-primary-color hover:bg-transparent duration-300 ease-out"
                  >
                    Contact
                  </button>
                </Audible>
              </div>
            </div>
            <LazyLoadImage
              className="absolute md:relative w-96 md:w-[35%] z-[-1] md:z-0 opacity-50 md:opacity-100 blur-sm md:blur-none ease-in-out duration-200"
              src={fireGuy}
              width={400}
              height={400}
              alt="Fire guy multi-colors"
              afterLoad={() => setLoadImage(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
