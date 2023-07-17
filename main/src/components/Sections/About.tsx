import fireIcon from "../../assets/images/fireIcon.svg";
import { usePageStore } from "../../store/pageStore";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const About = () => {
  const { setup } = usePageStore();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setup({ section: "About" });
  }, [isInView]);

  return (
    <section
      id="About"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="px-2 md:px-14"
    >
      <div className="flex items-center lg:px-0 relative">
        <img
          src={fireIcon}
          alt="Fire icon multi-colors"
          className="image-vert hidden md:block w-72 md:w-96 lg:w-auto ease-in-out duration-200"
        />
        <div className="flex flex-col gap-y-4">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl">Skills</h2>
            <h3 className="font-semibold text-lg md:text-xl text-secondary-color text-balance lg:w-3/4">
              Throughout my programming career, I have undertaken diverse
              projects, ranging from games and libraries to websites and
              applications, which have provided me with invaluable experience,
              agility, and efficiency in programming.
            </h3>
          </div>
          <div className="flex flex-col gap-y-12 gap-x-12 md:flex-row md:w-[98%] lg:w-3/5 justify-between">
            <div className="flex flex-col gap-y-2">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Programming Languages:
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>TypeScript</li>
                <li>JavaScript (Node.JS)</li>
                <li>Python</li>
                <li>Solidity</li>
                <li>Lua</li>
                <li>C and C++ (I haven't used these in years)</li>
                <li>Rust (I'm just starting to learn about this language)</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Databases:
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
