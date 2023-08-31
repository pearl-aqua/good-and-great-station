import Complete from "@/components/complete/Complete";
import ResultContainer from "@/components/complete/ResultContainer";

export default function CompletePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Complete />
      <ResultContainer />
    </div>
  );
}
