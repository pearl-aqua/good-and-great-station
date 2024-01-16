import { create } from "zustand";

interface StateType {
  userId: string | null;
  setUserId: (userId: string) => void;
  name: string | null;
  setName: (name: string) => void;
  applyNumber: string | null;
  setApplyNumber: (applyNumber: string) => void;
  cardSubmit: boolean;
  setCardSubmit: (cardSubmit: boolean) => void;
  noApply: boolean;
  setNoApply: (noApply: boolean) => void;
  answers: Record<string, string>;
  setAnswers: (answers: Record<string, string>) => void;
}

const userStore = create<StateType>((set, get) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
  name: null,
  setName: (name) => set({ name }),
  applyNumber: null,
  setApplyNumber: (applyNumber) => set({ applyNumber }),
  cardSubmit: false,
  setCardSubmit: (cardSubmit) => set({ cardSubmit }),
  noApply: false,
  setNoApply: (noApply) => set({ noApply }),
  answers: {},
  setAnswers: (answers) => set({ answers }),
}));

export default userStore;
