"use client";
import useNewAuth from "@/hooks/useNewAuth";
import Typo from "../typo/Typo";
import ViewResult from "./ViewResult";

const questionArr = ["70001", "70002", "70003"];
const title = "크라임씬";
const subTitle = "RETURNS";
const date = "2024.03";

export default function ResultContainer() {
  useNewAuth();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <Typo.HeadTitle>{title}</Typo.HeadTitle>
        <Typo.H2>{subTitle}</Typo.H2>
        <Typo.BodyText>{date}</Typo.BodyText>
      </div>
      {questionArr.map((el) => (
        <ViewResult key={el} questionId={el} isSubmitId={""} />
      ))}
    </div>
  );
}
