import Typo from "../typo/Typo";
import PollContainer from "../poll/PollContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const title = "KEYLAND";
const subTitle = "ON: AND ON";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-0.5">
        <Typo.MainTitle color="text-blue-700">{title}</Typo.MainTitle>
        <Typo.MainTitle color="text-blue-700">{subTitle}</Typo.MainTitle>
      </div>

      <PollContainer />

      <Link href={"/memo"}>
        <Button className="mt-5 text-zinc-300" variant="link">
          키랜드 관련 투표하고 싶은 항목이 있으시다면
        </Button>
      </Link>
    </div>
  );
}
