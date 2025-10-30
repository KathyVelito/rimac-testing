import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LoginFormState = {
  documentType: string;
  documentNumber: string;
  phone: string;
  acceptPrivacy: boolean;
  acceptCommercial: boolean;
  setDocumentType: (v: string) => void;
  setDocumentNumber: (v: string) => void;
  setPhone: (v: string) => void;
  setAcceptPrivacy: (v: boolean) => void;
  setAcceptCommercial: (v: boolean) => void;
  reset: () => void;
};

const initial: Omit<LoginFormState, "setDocumentType" | "setDocumentNumber" | "setPhone" | "setAcceptPrivacy" | "setAcceptCommercial" | "reset"> = {
  documentType: "",
  documentNumber: "",
  phone: "",
  acceptPrivacy: false,
  acceptCommercial: false,
};

export const useLoginFormStore = create<LoginFormState>()(
  persist(
    (set) => ({
      ...initial,
      setDocumentType: (v) => set({ documentType: v }),
      setDocumentNumber: (v) => set({ documentNumber: v }),
      setPhone: (v) => set({ phone: v }),
      setAcceptPrivacy: (v) => set({ acceptPrivacy: v }),
      setAcceptCommercial: (v) => set({ acceptCommercial: v }),
      reset: () => set({ ...initial }),
    }),
    {
      name: "login-form-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
