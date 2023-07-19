import { IOldWorksProps } from "../constant/oldWorks";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <h2 className="font-bold text-lg md:text-2xl">
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

  const [hover, setHover] = useState(false);
  const setOnHover = () => setHover(!hover);

  return (
    <div
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
        <p className="text-secondary-color font-semibold text-sm md:text-2xl text-balance">
          {description}
        </p>
      </div>
      <LazyLoadImage
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
