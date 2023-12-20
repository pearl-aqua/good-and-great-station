"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { updateMemo } from "@/firebase/memo";
import userStore from "@/lib/store/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

export default function MemoInput() {
  const [text, setText] = useState<string>("");

  const { userId } = userStore();
  const router = useRouter();

  const localEmail =
    (typeof window !== "undefined" &&
      window.localStorage.getItem("gas_email")) ||
    "";

  const handleClickButton = async () => {
    await updateMemo({ userId, email: localEmail, text });

    alert("제출이 완료되었습니다. 감사합니다.");
    router.push("/");
  };
  return (
    <>
      - 키랜드 전에 만들면 좋을 페이지에 대한 의견 받습니다.
      <div className="flex flex-col sm:max-w-full lg:max-w-[450px]">
        <Textarea
          className="w-full h-[80px]"
          placeholder="300자 이내로 작성해주세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button variant="outline" onClick={handleClickButton}>
          등록
        </Button>
      </div>
    </>
  );
}
