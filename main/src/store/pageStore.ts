import { create } from "zustand";

interface IPageStore {
  section: string;
  toast: string;
  setup: (property: Partial<IPageStore>) => void;
}

export const usePageStore = create<IPageStore>((set) => ({
  section: "Home",
  toast: "",
  setup(property: Partial<IPageStore>) {
    set(property);
  },
}));
