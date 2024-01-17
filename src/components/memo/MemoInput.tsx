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
import Link from "next/link";
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
    <div className="flex flex-col justify-center items-center gap-4">
      <Card className="w-[320px]">
        <CardHeader>투표 내용 모집</CardHeader>
        <CardContent>
          <CardDescription>
            - 키랜드 전에 투표하고 싶은 항목이 있으면 남겨주세요.
          </CardDescription>
          <CardDescription>
            - 반영할 수 있는 투표 항목이 있으면 반영해 보겠습니다.
          </CardDescription>
          <CardDescription>
            - 질문과 객관식 답변을 모두 써주셔야 적용 가능합니다.
          </CardDescription>
          <CardDescription>
            - 그 외 자유로이 남겨주고 싶은 것이 있으면 남겨주셔도 됩니다.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Textarea
            className="w-full h-[200px]"
            placeholder="500자 이내로 작성해주세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={handleClickButton}>
            등록
          </Button>
        </CardFooter>
      </Card>
      <Link href={"/"}>
        <Button variant="link" className="text-zinc-400">
          뒤로 가기
        </Button>
      </Link>
    </div>
  );
}
