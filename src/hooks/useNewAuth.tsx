import { getUserInfo } from "@/firebase/login";
import userStore from "@/lib/store/user";
import { useEffect } from "react";

export default function useNewAuth() {
  const { userId, setUserId, setAnswers } = userStore();
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
    const result = userInfoResult;
    console.log(result, "set");
    if (result?.id) {
      setUserId(result.id);
    }
    const myAnswer: Record<string, string> = {};
    if (result["6001"]) {
      myAnswer["6001"] = result["6001"];
    }
    setAnswers(myAnswer);
  };

  useEffect(() => {
    if (localId && !userId) {
      getUserData(localId, localEmail);
    }
  }, []);

  return {};
}
