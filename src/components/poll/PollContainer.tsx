import Poll from "./Poll";
import Typo from "@/components/typo/Typo";

export const questionArr = ["70001", "70002", "70003"];

const title = "크라임씬";
const subTitle = "RETURNS";

export default function PollContainer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center">
          <Typo.HeadTitle>{title}</Typo.HeadTitle>
          <Typo.H2>{subTitle}</Typo.H2>
        </div>
        {questionArr.map((el) => (
          <Poll key={el} questionId={el} />
        ))}
      </div>
    </>
  );
}
