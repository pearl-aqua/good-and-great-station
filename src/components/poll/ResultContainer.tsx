"use client";
import ViewResult from "./ViewResult";

const questionArr = ["70001", "70002", "70003"];

export default function ResultContainer() {
  return (
    <>
      {questionArr.map((el) => (
        <ViewResult key={el} questionId={el} isSubmitId={""} />
      ))}
    </>
  );
}
