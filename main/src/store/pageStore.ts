import { create } from "zustand";

interface IPageStore {
  toast: string;
  section: string;
  volume: boolean;
  setup: (property: Partial<IPageStore>) => void;
}

export const usePageStore = create<IPageStore>((set) => ({
  toast: "",
  volume: false,
  section: "Home",
  setup(property: Partial<IPageStore>) {
    set(property);

    if (property.section) {
      const section = document.getElementById(property.section);
      console.log(document.body.scrollHeight, document.body.clientHeight, document.body.offsetHeight,)

      if (section) {
        if (property.section === 'Contact') {
          window.scrollTo({ top: 5516, behavior: 'smooth' });
        }
        else section.scrollIntoView({ behavior: "smooth" });
      }
    }
  },
}));
