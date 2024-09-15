"use client";

import useNewAuth from "@/hooks/useNewAuth";
import userStore from "@/lib/store/user";
import { useState } from "react";
import ViewQuestion from "./ViewQuestion";
import ViewResult from "./ViewResult";

export default function Poll({ questionId }: { questionId: string }) {
  const { answers } = userStore();
  const [isSubmitId, setIsSubmitId] = useState<string[]>([]);

  useNewAuth();

  return (
    <>
      {isSubmitId || answers[questionId] ? (
        <ViewResult questionId={questionId} isSubmitId={isSubmitId} showLink />
      ) : (
        <ViewQuestion setIsSubmit={setIsSubmitId} questionId={questionId} />
      )}
    </>
  );
}
