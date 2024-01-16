import { useEffect, useState } from "react";
import { getResult } from "@/firebase/question";
import Result from "../complete/Result";
import userStore from "@/lib/store/user";

export default function ViewResult() {
  const { userId, answers } = userStore();
  const [result, setResult] = useState<any>({});

  const getList = async () => {
    const resultData = await getResult({ questionId: "6001" });
    setResult(resultData);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Result
      data={result.data}
      total={result.total}
      show={true}
      myValue={answers["6001"]}
    />
  );
}
