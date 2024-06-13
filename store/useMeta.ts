import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
// import i18n from "../i18/i18n";

type Language = {
  code: string;
  rtl: boolean;
};

type Meta = {
  language: Language;
  showOnBoarding?: boolean;
  setMeta: (data: any) => void;
};

export const useMeta = create<Meta>()(
  persist(
    (set) => ({
      language: { code: "en", rtl: false },
      showOnBoarding: true,
      setMeta: (data: Meta) =>
        set((state) => {
          return { ...state, ...data };
        }),
    }),
    {
      name: "meta",
      // storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
