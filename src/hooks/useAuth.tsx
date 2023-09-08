"use client";

import { getUserInfo } from "@/firebase/login";
import userStore from "@/lib/store/user";
import { useEffect } from "react";

export default function useAuth() {
  const { userId, setUserId, setApplyNumber } = userStore();

  const getUserData = async (id: string) => {
    const userInfoResult = await getUserInfo({
      id,
      email: "",
    });

    const { applyNumber } = userInfoResult;
    setApplyNumber(applyNumber);
  };
  const localId =
    typeof window !== "undefined" && window.localStorage.getItem("gas_id");

  useEffect(() => {
    if (localId && !userId) {
      setUserId(localId);
      getUserData(localId);
    }
  }, []);

  return { localId };
}
