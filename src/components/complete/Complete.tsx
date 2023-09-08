"use client";

import { useRouter } from "next/navigation";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import userStore from "@/lib/store/user";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";

export default function Complete() {
  useAuth();
  const router = useRouter();
  const { applyNumber } = userStore();

  const onClick = () => {
    if (applyNumber) {
      router.push(`/my-lilfreaks/${applyNumber}`);
    } else {
      alert("지원서 정보가 없습니다. 지원을 먼저 해주세요.");
    }
  };

  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardTitle className="mb-1">지원이 완료되었습니다!</CardTitle>
        <div className="my-2">
          <CardDescription className="mb-1">
            합격자 발표는 따로 없으며 9/11 KEY의 미니앨범 Good & Great 즐겁게
            즐겨주세요!
          </CardDescription>
          <CardDescription>
            지원 내용은 아래에서 확인 가능합니다.
          </CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="justify-end">
        <Button variant="outline" className="w-[160px]" onClick={onClick}>
          나의 지원서 보러가기
        </Button>
      </CardFooter>
    </Card>
  );
}
