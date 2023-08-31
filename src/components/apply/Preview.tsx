import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import SelectButton from "../custom/SelectButton";
import Typo from "../typo/Typo";
import answerStore from "@/lib/store/answers";

const typeLabel = {
  apply: {
    trigger: "지원서 미리보기",
    action: "입사 지원하기",
  },
  complete: {
    trigger: "나의 지원서 보기",
    action: "이미지 다운 받기",
  },
};

export default function Preview({ type }) {
  const {
    name,
    yearLabel,
    motiveText,
    myText,
    motiveOptionLabel,
    songsLabel,
    characterLabel,
  } = answerStore();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className={`${type !== "apply" ? "w-1/2" : ""} font-bold"`}
        >
          {typeLabel[type].trigger}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Little&Freaks 입사 지원서 미리보기
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between border-b">
            <div className="w-1/3">
              <Label htmlFor="mess">이름</Label>
              <Typo.H2>{name}</Typo.H2>
            </div>

            <div className="w-1/3">
              <Label htmlFor="mess">입덕 시기</Label>
              <Typo.H2>{yearLabel()}</Typo.H2>
            </div>

            <div className="w-1/3">
              <Label htmlFor="mess">기범이는</Label>
              <Typo.H2>{characterLabel()}</Typo.H2>
            </div>
          </div>

          <div className="pb-4 border-b">
            <Label htmlFor="mess">입덕 계기</Label>
            <Typo.BodyText>{motiveOptionLabel()}</Typo.BodyText>
            <Typo.BodyText>{motiveText}</Typo.BodyText>
          </div>

          <div className="pb-4 border-b">
            <Label htmlFor="mess">조아하는 노래</Label>
            <div className="flex flex-wrap w-full gap-1.5">
              {songsLabel.map(({ label, value }) => (
                <SelectButton key={value}>{label}</SelectButton>
              ))}
            </div>
          </div>

          <div className="pb-4 border-b">
            <Label htmlFor="mess">나의 장점</Label>
            <Typo.BodyText>{myText}</Typo.BodyText>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <AlertDialogCancel>돌아가기</AlertDialogCancel>
          <Link href="/complete">
            <AlertDialogAction>{typeLabel[type].action}</AlertDialogAction>
          </Link>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
