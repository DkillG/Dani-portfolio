import { IOldWorksProps } from "../constant/oldWorks";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Audible from "./Audible";

export interface IWorkCardProps extends IOldWorksProps {
  setClickVisibleImage: () => void;
  setIndexImage: (args: number) => void;
}

const TitleHeader = ({
  side,
  position,
  organization,
  hover,
  closed,
}: Pick<IOldWorksProps, "side" | "position" | "organization" | "closed"> & {
  hover: boolean;
}) => {
  const title = (
    <h2 className="flex items-center gap-x-2 font-bold text-sm md:text-2xl">
      {position} <b className="primary-gradient">||</b> {organization}{" "}
      {closed && <b className="text-xs primary-gradient">[CLOSED]</b>}
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
  closed,
  size,
  setClickVisibleImage,
  setIndexImage,
}: IWorkCardProps & { idx: number }) => {
  const [hover, setHover] = useState(false);
  const setOnHover = () => setHover(!hover);

  return (
    <div
      className={`work-card flex flex-col gap-y-8 ${
        side === "right" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-center gap-x-32`}
    >
      <div className="flex flex-col md:w-[50%]">
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {time}
        </time>
        <Audible>
          <a
            onMouseEnter={setOnHover}
            onMouseLeave={setOnHover}
            className="flex hover:text-[#ee4670e6] duration-200 ease-out flex-row gap-x-2 items-center mb-2"
            href={url}
            target="_blank"
          >
            <TitleHeader
              side={side}
              closed={closed}
              position={position}
              organization={organization}
              hover={hover}
            />
          </a>
        </Audible>
        <p className="text-secondary-color font-semibold text-sm md:text-2xl text-balance">
          {description}
        </p>
      </div>
      <LazyLoadImage
        onClick={() => {
          setClickVisibleImage();
          setIndexImage(idx);
        }}
        effect="blur"
        src={image}
        width='100%'
        alt={organization}
        wrapperClassName={`rounded-xl md:w-${size} hover:cursor-pointer hover:scale-105 special-transition duration-300`}
        className={`rounded-xl md:w-${size} hover:cursor-pointer hover:scale-105 special-transition duration-300`}
      />
    </div>
  );
};

export default WorkCard;
