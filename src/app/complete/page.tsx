import Complete from "@/components/complete/Complete";
import ResultContainer from "@/components/complete/ResultContainer";
import { getResult } from "@/firebase/apply";

export default async function CompletePage() {
  const data = await getResult();

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Complete />
      <ResultContainer data={data} />
    </div>
  );
}
