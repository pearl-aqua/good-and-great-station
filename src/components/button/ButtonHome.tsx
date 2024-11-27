"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function ButtonHome() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center gap-2 mb-6">
        <Button
          variant="link"
          className="m-0 text-zinc-400"
          onClick={() => router.push("/")}
        >
          홈으로
        </Button>
      </div>
    </>
  );
}
