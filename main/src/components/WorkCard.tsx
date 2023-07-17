import { useRef } from "react";
import { IOldWorksProps } from "../constant/oldWorks";
import { useInView } from "framer-motion";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";

export interface IWorkCardProps extends IOldWorksProps {
  setClickVisibleImage: () => void;
  setIndexImage: (args: number) => void;
}

const TitleHeader = ({
  side,
  position,
  organization,
  hover,
}: Pick<IOldWorksProps, "side" | "position" | "organization"> & {
  hover: boolean;
}) => {
  const title = (
    <h2 className="font-bold text-xl md:text-2xl">
      {position} <b className="primary-gradient">||</b> {organization}
    </h2>
  );

  if (side === "right")
    return (
      <>
        {title}
        <div
          className={`text-xl font-extrabold text-[#EE466F] ${
            hover ? "translate-x-3" : ""
          } ease-in-out duration-200`}
        >
          <AiOutlineRight />
        </div>
      </>
    );
  else
    return (
      <>
        <div
          className={`text-xl font-extrabold text-[#EE466F] ${
            hover ? "-translate-x-3" : ""
          } ease-in-out duration-200`}
        >
          <AiOutlineLeft />
        </div>
        {title}
      </>
    );
};

const WorkCard = ({
  position,
  organization,
  description,
  url,
  image,
  side,
  time,
  idx,
  setClickVisibleImage,
  setIndexImage,
}: IWorkCardProps & { idx: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [hover, setHover] = useState(false);
  const setOnHover = () => setHover(!hover);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}
      className={`work-card flex flex-col gap-y-8 ${
        side === "right" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-between`}
    >
      <div className="flex flex-col md:w-[50%]">
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {time}
        </time>
        <a
          onMouseEnter={setOnHover}
          onMouseLeave={setOnHover}
          className="flex flex-row gap-x-2 items-center mb-2"
          href={url}
          target="_blank"
        >
          <TitleHeader
            side={side}
            position={position}
            organization={organization}
            hover={hover}
          />
        </a>
        <p className="text-secondary-color font-semibold text-base md:text-2xl text-balance">
          {description}
        </p>
      </div>
      <img
        onClick={() => {
          setClickVisibleImage();
          setIndexImage(idx);
        }}
        className="md:w-[25%] rounded-xl hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-500"
        src={image}
        alt={organization}
      />
    </div>
  );
};

export default WorkCard;
