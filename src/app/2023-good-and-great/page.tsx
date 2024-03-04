import ResultContainer from "@/components/history/HistoryContainer";
import Typo from "@/components/typo/Typo";

const title = "Good&Great";
const date = "2023.09";

export default function ResultPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-0.5 mb-2">
        <Typo.HeadTitle>{title}</Typo.HeadTitle>
        <Typo.BodyText>{date}</Typo.BodyText>
      </div>
      <ResultContainer />
    </div>
  );
}
