"use client";

import { useRouter } from "next/navigation";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import userStore from "@/lib/store/user";
import { Button } from "../ui/button";

export default function Complete() {
  const router = useRouter();
  const { applyNumber } = userStore();

  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>지원이 완료되었습니다</CardTitle>
      </CardHeader>
      <CardFooter className="justify-end">
        <Button
          variant="outline"
          className="w-[160px]"
          onClick={() => router.push(`/my-lilfreaks/${applyNumber}`)}
        >
          나의 지원서 보러가기
        </Button>
      </CardFooter>
    </Card>
  );
}
