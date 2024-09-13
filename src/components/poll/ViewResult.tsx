"use client";

import { useEffect, useState } from "react";
import { getResult } from "@/firebase/question";
import userStore from "@/lib/store/user";
import Result from "../result/Result";

const longOptionList = ["60001", "90001", "90005"];

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
    if (longOptionList.includes(questionId)) {
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
      myValue={answers[questionId] || isSubmitId}
      showLink={showLink}
    />
  );
}
