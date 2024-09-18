import ResultContainer from "@/components/poll/ResultContainer";

const questionArr = ["90004", "90005", "90006", "90001", "90002", "90003"];
const title = "KEYLAND";
const subTitle = "ON : AND ON <#>";
const date = "2024.09";

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
