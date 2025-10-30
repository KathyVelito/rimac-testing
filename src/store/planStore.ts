import { create } from "zustand";

type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

type PlanState = {
  plans: Plan[];
  loading: boolean;
  error: string | null;
  setPlans: (plans: Plan[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const usePlanStore = create<PlanState>((set) => ({
  plans: [],
  loading: false,
  error: null,
  setPlans: (plans) => set({ plans }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
