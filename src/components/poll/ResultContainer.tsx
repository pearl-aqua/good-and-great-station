"use client";
import ViewResult from "./ViewResult";

const questionArr = ["60001", "60002", "60003", "60004"];

export default function ResultContainer() {
  return (
    <>
      {questionArr.map((el) => (
        <ViewResult key={el} questionId={el} isSubmitId={""} />
      ))}
    </>
  );
}
