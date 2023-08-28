import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { album1_1 } from "@/constants/index";
import Link from "next/link";
import SelectButton from "../custom/SelectButton";
import Typo from "../typo/Typo";

export default function Preview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">다음</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>입사 지원서 미리보기</DialogTitle>
          <DialogDescription>아래 내용을 확인해 주세요</DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <Button variant="outline">돌아가기</Button>
          <Link href="/complete">
            <Button variant="outline">입사 지원하기</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
