"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";

export default function MyButtonTwo({
  userId,
}: {
  url: string;
  userId: string;
}) {
  const router = useRouter();
  const { localId } = useAuth();

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
        {localId === userId && (
          <>
            <Button
              variant="link"
              className="text-zinc-400"
              onClick={() => alert("준비 중입니다")}
            >
              로그아웃
            </Button>
          </>
        )}
      </div>
    </>
  );
}
