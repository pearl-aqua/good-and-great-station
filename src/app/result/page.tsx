import ResultContainer from "@/components/complete/ResultContainer";
import { getResult } from "@/firebase/apply";

export default async function ResultPage() {
  const data = await getResult();
  return <ResultContainer data={data} />;
}
