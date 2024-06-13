import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
// import AsyncStorage from "@react-native-async-storage/async-storage";

type TAuthStore = {
  token: string | null;
  authenticated: boolean;
  setAuth: (data: any) => void;

  logout: () => void;
};

export const useAuth = create<TAuthStore>()(
  persist(
    (set) => ({
      token: null,
      authenticated: false,
      setAuth: (data) =>
        set((state) => {
          return { ...state, ...data };
        }),
      logout: () =>
        set((state) => ({
          token: null,
          authenticated: false,
        })),
    }),
    {
      name: "auth",
      // storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
