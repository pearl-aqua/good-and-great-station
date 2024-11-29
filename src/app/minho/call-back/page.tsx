import ResultContainer from "@/components/poll/ResultContainer";

const questionArr = ["99001", "99002"];
const title = "Call Back";
const subTitle = "";
const date = "2024.11";

export default function CallbackPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-8">
      <ResultContainer
        title={title}
        subTitle={subTitle}
        date={date}
        questionArr={questionArr}
        color="text-zinc-600"
      />
    </div>
  );
}
