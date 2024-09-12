"use client";

import { useEffect, useState } from "react";
import { getResult } from "@/firebase/question";
import userStore from "@/lib/store/user";
import Result from "../result/Result";

export default function ViewResult({
  questionId,
  isSubmitId,
  showLink,
}: {
  questionId: string;
  isSubmitId: string;
  showLink?: boolean;
}) {
  const { answers } = userStore();
  const [result, setResult] = useState<any>({});

  const getList = async () => {
    const resultData = await getResult({ questionId });
    if (questionId === "60001" || questionId === "90001") {
      const filterZero = resultData?.data?.list.filter(({ count }) => count);
      setResult({
        ...resultData,
        data: { ...resultData?.data, list: filterZero },
      });
    } else {
      setResult(resultData);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Result
      data={result.data}
      total={result.total}
      show={!(questionId === "60001" || questionId === "60006")}
      myValue={answers[questionId] || isSubmitId}
      showLink={showLink}
    />
  );
}
