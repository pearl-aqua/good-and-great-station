import { create } from "zustand";

interface StateType {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  applyNumber: number | null;
  setApplyNumber: (applyNumber: number) => void;
}

const userStore = create<StateType>((set, get) => ({
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
  applyNumber: null,
  setApplyNumber: (applyNumber) => set({ applyNumber }),
}));

export default userStore;
