"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { updateMemo } from "@/firebase/memo";
import userStore from "@/lib/store/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonHome from "../../my/ButtonHome";
import { Button } from "../../ui/button";

export default function BugReportContainer() {
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
      <Card className="px-2 mb-4">
        <CardHeader>
          <CardTitle className="text-zinc-500 mb-4">Bug Report</CardTitle>
          <CardDescription>
            - 발견하신 버그의 내용을 입력해주세요.
          </CardDescription>
          <CardDescription>
            - 버그 리포트 작성시 사용하신 기기 (노트북, 모바일 등), 기기의
            운영체제 종류(Mac, Windows, 갤럭시, 아이폰 등), 재현 과정(이 버튼을
            눌렀을때 페이지 이동이 되지 않고 멈추어 있음) 등을 작성해주시면 수정
            작업이 가능합니다.
          </CardDescription>
          <CardDescription>
            - 그 외 내년 투표에 대한 의견 등을 받습니다.
          </CardDescription>
          <CardDescription>
            - 참고로 내용에 대한 답변은 어려울 수 있습니다. 감사합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:max-w-full lg:max-w-[450px]">
          <Textarea
            className="w-full h-[132px]"
            placeholder="300자 이내로 작성해주세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </CardContent>
        <CardFooter className="justify-end">
          <Button variant="outline" onClick={handleClickButton}>
            등록
          </Button>
        </CardFooter>
      </Card>
      <ButtonHome />
    </>
  );
}
