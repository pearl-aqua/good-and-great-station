import { useEffect, useState } from "react";
import { getResult } from "@/firebase/question";
import Result from "../complete/Result";
import userStore from "@/lib/store/user";

export default function ViewResult({
  questionId,
  isSubmitId,
}: {
  questionId: string;
  isSubmitId: string;
}) {
  const { answers } = userStore();
  const [result, setResult] = useState<any>({});

  const getList = async () => {
    const resultData = await getResult({ questionId });
    setResult(resultData);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Result
      data={result.data}
      total={result.total}
      show={questionId !== "60001"}
      myValue={answers[questionId] || isSubmitId}
    />
  );
}
