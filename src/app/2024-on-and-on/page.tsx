import Typo from "@/components/typo/Typo";
import ViewResult from "@/components/poll/ViewResult";

const title = "KEYLAND";
const subTitle = "ON: AND ON";
const date = "2024.01";
const questionArr = ["60005", "60006", "60001", "60002", "60003", "60004"];

export default function ResultPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-0.5 mb-2">
        <Typo.HeadTitle color="text-blue-700">{title}</Typo.HeadTitle>
        <Typo.HeadTitle color="text-blue-700">{subTitle}</Typo.HeadTitle>
        <Typo.BodyText color="text-blue-700">{date}</Typo.BodyText>
      </div>
      {questionArr.map((el) => (
        <ViewResult key={el} questionId={el} isSubmitId={""} />
      ))}
    </div>
  );
}
