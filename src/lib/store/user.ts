import { create } from "zustand";

interface StateType {
  userId: string | null;
  setUserId: (userId: string) => void;
  applyNumber: string | null;
  setApplyNumber: (applyNumber: string) => void;
}

const userStore = create<StateType>((set, get) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
  applyNumber: null,
  setApplyNumber: (applyNumber) => set({ applyNumber }),
}));

export default userStore;
