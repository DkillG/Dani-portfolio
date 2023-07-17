import Viewer from "react-viewer";
import { useEffect, useState } from "react";
import { usePageStore } from "../store/pageStore";

import { workPictures } from "../constant/workPictures";
import Notification from "./Notification";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Projects";

const Landing = () => {
  const [visibleImage, setVisibleImage] = useState(false);
  const [indexImage, setIndexImage] = useState(0);
  const { toast, setup } = usePageStore();

  const setClickVisibleImage = () => {
    setVisibleImage(true);
  };

  useEffect(() => {
    const debounce = setTimeout(() => setup({ toast: "" }), 3000);

    return () => {
      clearTimeout(debounce);
    };
  }, [toast]);
  return (
    <>
      {!!toast && <Notification message={toast} />}

      <Viewer
        visible={visibleImage}
        scalable={false}
        images={Object.values(workPictures)}
        activeIndex={indexImage}
        rotatable={false}
        zoomSpeed={2}
        onMaskClick={() => setVisibleImage(false)}
        onClose={() => setVisibleImage(false)}
      />

      <main className="flex flex-col gap-y-52 md:gap-y-64 mt-32 lg:mt-0 text-white">
        <Home />
        <About />
        <Projects
          setClickVisibleImage={setClickVisibleImage}
          setIndexImage={setIndexImage}
        />
      </main>
    </>
  );
};

export default Landing;
