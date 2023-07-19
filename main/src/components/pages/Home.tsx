import { LazyLoadImage } from "react-lazy-load-image-component";
import ellipse_s from "../../assets/images/ellipse_s.svg";
import fireGuy from "../../assets/images/fireGuy.webp";
import { useState } from "react";

const Home = () => {

  const [ loadImage, setLoadImage ] = useState(false);

  return (
    <section id="Home">
      <div className="relative">
        <img
          src={ellipse_s}
          alt="Red light flash"
          className="absolute z-[-1] -top-32 image-op"
        />
        <div className={`px-2 md:px-4 lg:px-0 ${ loadImage ? 'opacity-100' : 'translate-x-96 opacity-0' } duration-200 ease-in-out`}>
          <div className="flex items-center justify-center md:justify-between lg:justify-center relative">
            <div className="flex lg:w-[50%] flex-col gap-y-6">
              <div className="flex flex-col gap-y-1">
                <h1 className="font-bold text-5xl lg:text-6xl">
                  Hi, I'm Daniel
                </h1>
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl primary-gradient">
                  Full-Stack Developer
                </h2>
              </div>
              <h3 className="font-semibold text-sm md:text-xl lg:text-2xl text-secondary-color text-balance">
                Full-stack web developer crafting transformative digital
                experiences. With a 5-year journey in programming, I specialize
                in web development languages and frameworks. Explore my
                portfolio showcasing my projects, and feel free to reach out for
                exciting collaboration opportunities.
              </h3>
            </div>
            <LazyLoadImage
              className="absolute md:relative w-96 md:w-[35%] z-[-1] md:z-0 opacity-50 md:opacity-100 blur-sm md:blur-none ease-in-out duration-200"
              src={fireGuy}
              width={400}
              height={400}
              afterLoad={() => setLoadImage(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;