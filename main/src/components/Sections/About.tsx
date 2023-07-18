import fireIcon from "../../assets/images/fireIcon.webp";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);


  return (
    <section
      id="About"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="px-2 md:px-4"
    >
      <div className="flex items-center justify-center relative">
        <LazyLoadImage
          src={fireIcon}
          width={400}
          alt="Fire icon multi-colors"
          className="image-vert hidden md:block w-72 md:w-[25%] ease-in-out duration-200"
        />
        <div className="flex flex-col gap-y-8 lg:w-[50%]">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl primary-gradient">Skills</h2>
            <h3 className="font-semibold text-sm md:text-xl lg:text-2xl text-secondary-color">
              Throughout my programming career, I have undertaken diverse
              projects, ranging from games and libraries to websites and
              applications, which have provided me with invaluable experience,
              agility, and efficiency in programming.
            </h3>
          </div>
          <div className="flex flex-col flex-wrap gap-y-12 justify-between lg:flex-row">
            <div className="flex flex-col gap-y-2">
              <h2 className="mb-2 text-base md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                Programming Languages:
              </h2>
              <ul className="max-w-md text-sm md:text-lg lg:text-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>TypeScript</li>
                <li>JavaScript (Node.JS)</li>
                <li>Python</li>
                <li>Solidity</li>
                <li>Lua</li>
                <li>C and C++ (I haven't used in years)</li>
                <li>Rust (Beginner)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <h2 className="mb-2 text-base md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                Databases:
              </h2>
              <ul className="max-w-md text-sm md:text-lg lg:text-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <h2 className="mb-2 text-base md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                Clouds:
              </h2>
              <ul className="max-w-md text-sm md:text-lg lg:text-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>AWS</li>
                <li>Azure</li>
                <li>GCP</li>
                <li>IBM Clouds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
