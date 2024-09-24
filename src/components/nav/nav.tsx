"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typo from "../typo/Typo";

export default function Nav() {
  return (
    <div className="container mx-auto flex flex-col w-full max-w-[400px] justify-center items-center gap-6 my-6">
      <div className="flex flex-col items-center gap-1">
        <Typo.DecsText>지금 투표 보기</Typo.DecsText>
        <Link href={"/"}>
          <Button className="text-zinc-300" variant="outline">
            Pleasure Shop
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Typo.DecsText>이전 투표 보기</Typo.DecsText>

        <div className="flex flex-wrap gap-1 justify-center">
          <Link href={"/2024-on-and-on-sharp"}>
            <Button className="text-zinc-300" variant="outline">
              2024 ON : AND ON &lt;&#35;&gt;
            </Button>
          </Link>
          <Link href={"/2024-crime-scene"}>
            <Button className="text-zinc-300" variant="outline">
              Crime Scene
            </Button>
          </Link>
          <Link href={"/2024-on-and-on"}>
            <Button className="text-zinc-300" variant="outline">
              ON AND ON
            </Button>
          </Link>
          <Link href={"/2023-good-and-great"}>
            <Button className="text-zinc-300" variant="outline">
              Good & Great
            </Button>
          </Link>
          <Button
            className="text-zinc-300"
            variant="outline"
            onClick={() =>
              window.open("https://gas-station-theta.vercel.app", "_blank")
            }
          >
            2022 Kibum&apos;s Day
          </Button>
        </div>
      </div>
    </div>
  );
}
