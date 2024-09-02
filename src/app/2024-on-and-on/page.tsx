import ResultContainer from "@/components/poll/ResultContainer";

const title = "KEYLAND";
const subTitle = "ON: AND ON";
const date = "2024.01";
const questionArr = ["60005", "60006", "60001", "60002", "60003", "60004"];

export default function ResultPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <ResultContainer
        title={title}
        subTitle={subTitle}
        date={date}
        questionArr={questionArr}
        color={"text-blue-700"}
      />
    </div>
  );
}
