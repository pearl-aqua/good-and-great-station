import { getUserInfo } from "@/firebase/login";
import userStore from "@/lib/store/user";
import { useEffect } from "react";

const questionArr = ["60001", "60002", "60003", "60004"];

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
    const result: any = userInfoResult;
    if (result?.id) {
      setUserId(result.id);
    }
    const myAnswer: Record<string, string> = {};

    questionArr.forEach((el) => {
      if (result[el]) myAnswer[el] = result[el];
    });

    setAnswers(myAnswer);
  };

  useEffect(() => {
    if (localId && !userId) {
      getUserData(localId, localEmail);
    }
  }, []);

  return {};
}
