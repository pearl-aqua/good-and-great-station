"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex w-full justify-center items-center gap-1">
      <Link href={"/2024-crime-scene"}>
        <Button className="text-zinc-300" variant="link">
          Crime Scene
        </Button>
      </Link>
      <Link href={"/2024-on-and-on"}>
        <Button className="text-zinc-300" variant="link">
          On And On
        </Button>
      </Link>
      <Link href={"/2023-good-and-great"}>
        <Button className="text-zinc-300" variant="link">
          Good & Great
        </Button>
      </Link>
      <Button
        className="text-zinc-300"
        variant="link"
        onClick={() =>
          window.open("https://gas-station-theta.vercel.app", "_blank")
        }
      >
        2022
      </Button>
    </div>
  );
}
