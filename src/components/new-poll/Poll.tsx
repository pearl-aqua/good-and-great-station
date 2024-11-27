"use client";

import { useState } from "react";
import useNewAuth from "@/hooks/useNewAuth";
import userStore from "@/lib/store/user";
import Question from "./Question";
import Result from "./Result";

export default function Poll({ questionId }: { questionId: string }) {
  const { answers } = userStore();
  const [isSubmitId, setIsSubmitId] = useState<string[]>([]);

  useNewAuth();

  return (
    <>
      {isSubmitId.length > 0 || answers[questionId] ? (
        <Result questionId={questionId} isSubmitId={isSubmitId} showLink />
      ) : (
        <Question setIsSubmit={setIsSubmitId} questionId={questionId} />
      )}
    </>
  );
}
