import { Attributes, ReactElement, cloneElement, useState } from "react";
import { usePageStore } from "../store/pageStore";
import hover from "../assets/sounds/button-hover.mp3";
import select from "../assets/sounds/button-select.mp3";

interface ParentProps extends Attributes {
  children: ReactElement;
}

const Audible = ({ children, ...rest }: ParentProps) => {
  const { volume } = usePageStore();
  const [hoverAudio] = useState(new Audio(hover));
  const [clickAudio] = useState(new Audio(select));

  const playHover = () => {
    if (!volume) return;

    hoverAudio.currentTime = 0;
    hoverAudio.play();
  };

  const playClick = () => {
    if (!volume) return;

    clickAudio.currentTime = 0;
    clickAudio.play();
  };

  return (
    <>
      {cloneElement(children, {
        ...rest,
        onMouseDown: playClick,
        onMouseEnter: playHover,
      })}
    </>
  );
};

export default Audible;
