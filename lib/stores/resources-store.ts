import { create } from "zustand";
import { RESOURCES } from "../resources";

export interface ResourcesStoreState {
  language: "en" | "id";
  res: typeof RESOURCES["en"];
}

interface ResourcesStoreAction {
  setLanguage: (language: ResourcesStoreState["language"]) => void;
  reset: () => void;
}

const initialState: ResourcesStoreState = {
  language: "en",
  res: RESOURCES.en,
};

export const useLanguageStore = create<
  ResourcesStoreState & ResourcesStoreAction
>((set) => ({
  ...initialState,
  setLanguage: (language) => set({ language, res: RESOURCES[language] }),
  reset: () => set(initialState),
}));
