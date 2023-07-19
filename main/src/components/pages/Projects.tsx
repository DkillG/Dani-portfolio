import ellipse_m from "../../assets/images/ellipse_m.svg";
import { OldWorks } from "../../constant/oldWorks";
import WorkCard, { IWorkCardProps } from "../WorkCard";

const Projects = ({
  setClickVisibleImage,
  setIndexImage,
}: Pick<IWorkCardProps, "setClickVisibleImage" | "setIndexImage">) => {
  return (
    <section id="Projects" className="relative md:mt-44">
      <img
        alt="Blue flash light"
        className="absolute image-op md:-top-[5%] z-[-1] right-0"
        src={ellipse_m}
      />
      <div className="projects flex section mandatory-y flex-col px-4 md:px-16 gap-y-32">
        {OldWorks.map((el, idx) => (
          <WorkCard
            position={el.position}
            organization={el.organization}
            description={el.description}
            url={el.url}
            image={el.image}
            side={el.side}
            time={el.time}
            idx={idx}
            setClickVisibleImage={setClickVisibleImage}
            setIndexImage={setIndexImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
