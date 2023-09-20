"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full h-10 flex justify-center items-center bg-zinc-800 border-box">
      <Button
        variant="link"
        className="text-zinc-200 font-light"
        onClick={() => router.push("/about")}
      >
        About
      </Button>
      <Button
        variant="link"
        className="text-zinc-200 font-light"
        onClick={() => router.push("/bug-report")}
      >
        Bug report
      </Button>
    </div>
  );
}
