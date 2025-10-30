import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type UserData = {
  name: string;
  lastName: string;
  birthDay: string;
};

type UserState = {
  user: UserData | null;
  loading: boolean;
  error: string | null;
  setUser: (user: UserData | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
);
