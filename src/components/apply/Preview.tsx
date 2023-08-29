import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { album1_1 } from "@/constants/index";
import Link from "next/link";
import SelectButton from "../custom/SelectButton";
import Typo from "../typo/Typo";

export default function Preview() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">다음</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>입사 지원서 미리보기</AlertDialogTitle>
          <AlertDialogDescription>
            아래 내용을 확인해 주세요
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <Label htmlFor="mess">이름</Label>
          <Typo.H2>그림일기</Typo.H2>
          <Label htmlFor="mess">입덕 시기</Label>
          <Typo.H2>2005</Typo.H2>
          <Label htmlFor="mess">입덕 계기</Label>
          <Typo.BodyText>예능</Typo.BodyText>
          <Typo.BodyText>
            타입 추가 및 변경 사이즈 추가 상태값 추가
          </Typo.BodyText>
          <Label htmlFor="mess">조아하는 노래</Label>
          <div className="flex flex-wrap w-full gap-1.5">
            {album1_1.map(({ label, value }) => (
              <SelectButton key={value}>{label}</SelectButton>
            ))}
          </div>
          <Label htmlFor="mess">나의 장점</Label>
          <Typo.BodyText>
            타입 추가 및 변경 사이즈 추가 상태값 추가
          </Typo.BodyText>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>돌아가기</AlertDialogCancel>
          <Link href="/complete">
            <AlertDialogAction>입사 지원하기</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
