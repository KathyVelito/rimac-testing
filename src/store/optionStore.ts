import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Audience = "individual" | "family" | null;

type OptionState = {
  selectedAudience: Audience;
  setSelectedAudience: (value: Audience) => void;
};

export const useOptionStore = create<OptionState>()(
  persist(
    (set) => ({
      selectedAudience: null,
      setSelectedAudience: (value) => set({ selectedAudience: value }),
    }),
    {
      name: "option-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
