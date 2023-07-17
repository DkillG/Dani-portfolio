import ellipse_m from "../../assets/images/ellipse_m.svg";
import { OldWorks } from "../../constant/oldWorks";
import WorkCard, { IWorkCardProps } from "../WorkCard";
import { usePageStore } from "../../store/pageStore";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Projects = ({
  setClickVisibleImage,
  setIndexImage,
}: Pick<IWorkCardProps, "setClickVisibleImage" | "setIndexImage">) => {
  const { setup } = usePageStore();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setup({ section: "Projects" });
  }, [isInView]);

  return (
    <section id="Projects" ref={ref} className="relative">
      <img
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
