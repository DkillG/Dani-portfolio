import fireIcon from "../../assets/images/fireIcon.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { experience } from "../../constant/experience";

const About = () => {
  return (
    <section id="About" className="px-2 md:px-4">
      <div>
        <div className="flex items-center justify-center relative">
          <LazyLoadImage
            src={fireIcon}
            width={400}
            height={400}
            alt="Fire icon multi-colors"
            className="image-vert hidden md:block w-72 md:w-[25%] ease-in-out duration-200"
          />
          <div className="flex flex-col gap-y-8 lg:w-[50%]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl primary-gradient">
                Skills
              </h2>
            </div>
            <div className="flex flex-col flex-wrap md:max-h-[32rem] md:overflow-y-auto p-4 gap-y-12 justify-center md:gap-x-64 lg:flex-row">
              {experience.map((exp) => {
                return (
                  <div className="flex flex-col gap-y-2">
                    <h2 className="mb-2 text-base md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                      {exp.title}:
                    </h2>
                    <ul className="max-w-md text-sm md:text-lg lg:text-xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                      {
                        exp.stack.map(tech => <li className="flex items-center gap-x-4"><b className={`text-${tech.color.slice(1) || 'ffffff'}`}>{tech.icon}</b>{tech.name}</li>)
                      }
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
