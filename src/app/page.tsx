import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typo from "@/components/typo/Typo";
import { introData } from "@/constants";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-6">
        <Typo.H1>{introData.title}</Typo.H1>
        {introData.list.map(({ listTitle, content }) => (
          <div key={listTitle} className="mb-1">
            <Typo.H2>{listTitle}</Typo.H2>
            <ul>
              {content.map((el) => (
                <Typo.ListText key={el}>{el}</Typo.ListText>
              ))}
            </ul>
          </div>
        ))}
        <Link href="/apply">
          <Button variant="outline" className="w-full font-bold">
            입사 지원 하기
          </Button>
        </Link>
      </div>
    </main>
  );
}
