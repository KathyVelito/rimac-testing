import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

type PlanState = {
  plans: Plan[];
  selectedPlan: { name: string; price: number } | null;
  loading: boolean;
  error: string | null;
  setPlans: (plans: Plan[]) => void;
  setSelectedPlan: (plan: { name: string; price: number } | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const usePlanStore = create<PlanState>()(
  persist(
    (set) => ({
      plans: [],
      selectedPlan: null,
      loading: false,
      error: null,
      setPlans: (plans) => set({ plans }),
      setSelectedPlan: (selectedPlan) => set({ selectedPlan }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: "plans-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ plans: state.plans, selectedPlan: state.selectedPlan }),
    }
  )
);
