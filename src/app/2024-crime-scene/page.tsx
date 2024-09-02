import ResultContainer from "@/components/poll/ResultContainer";

const questionArr = ["70001", "70002", "70003"];
const title = "크라임씬";
const subTitle = "RETURNS";
const date = "2024.03";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <ResultContainer
        title={title}
        subTitle={subTitle}
        date={date}
        questionArr={questionArr}
      />
    </div>
  );
}
