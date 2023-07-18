import Viewer from "react-viewer";
import { useEffect, useState } from "react";
import { usePageStore } from "../store/pageStore";

import { workPictures } from "../constant/workPictures";
import Notification from "./Notification";

import { Home, About, Projects } from "./pages";

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
        noResetZoomAfterChange={true}
        onMaskClick={() => setVisibleImage(false)}
        onClose={() => setVisibleImage(false)}
      />

      <main className="flex flex-col gap-y-24 md:gap-y-12 mt-32 lg:mt-0 text-white">
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
