"use client";
// import useNewAuth from "@/hooks/useNewAuth";
import Typo from "../typo/Typo";
import ViewResult from "./ViewResult";

export default function ResultContainer({
  title,
  subTitle,
  date,
  questionArr,
  color,
}: {
  title: string;
  subTitle: string;
  date: string;
  questionArr: string[];
  color?: string;
}) {
  // useNewAuth();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className={`flex flex-col justify-center items-center ${color}`}>
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
