"use client";

import { getUserInfo } from "@/firebase/login";
import userStore from "@/lib/store/user";
import { useEffect } from "react";

export default function useAuth() {
  const { userId, setUserId, setApplyNumber, setCardSubmit, setNoApply } =
    userStore();
  const localId =
    typeof window !== "undefined" && window.localStorage.getItem("gas_id");
  const localEmail =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("gas_email")) ||
    "";

  const getUserData = async (id: string, email?: string) => {
    const userInfoResult = await getUserInfo({
      id,
      email: email || "",
    });

    const { applyNumber, cardSubmit, noApply } = userInfoResult;

    setApplyNumber(applyNumber);
    if (cardSubmit) setCardSubmit(cardSubmit);
    if (noApply) setNoApply(noApply);
  };

  useEffect(() => {
    if (localId && !userId) {
      setUserId(localId);
      getUserData(localId, localEmail);
    }
    if (!userId && !localId) {
      setApplyNumber("");
    }
  }, []);

  return { localId };
}
