"use client";

import SelectButton from "@/components/custom/SelectButton";
import Typo from "@/components/typo/Typo";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import answerStore from "@/lib/store/answers";
import userStore from "@/lib/store/user";
import { Label } from "@radix-ui/react-label";

export default function MyApplyPage() {
  const {
    name,
    year,
    yearLabel,
    motiveText,
    myText,
    motiveOption,
    motiveOptionLabel,
    songs,
    songsLabel,
    character,
    characterLabel,
  } = answerStore();
  const { setApplyNumber, userId } = userStore();
  return (
    <div
      id="capture_area"
      className=" px-2 bg-white sm:max-h-screen overflow-auto "
    >
      <CardHeader className="mb-2">
        <CardTitle>Little&Freaks 입사 지원서</CardTitle>
      </CardHeader>
      <CardContent className="sm:max-w-full lg:max-w-[450px] gab-2">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between border-b">
            <div className="w-1/2">
              <Label className="font-bold text-zinc-400">이름</Label>
              <Typo.TitleLabel>{name}</Typo.TitleLabel>
            </div>

            <div className="w-1/4">
              <Label className="font-bold text-zinc-400">입덕 시기</Label>
              <Typo.TitleLabel>{yearLabel()}</Typo.TitleLabel>
            </div>

            <div className="w-1/4">
              <Label className="font-bold text-zinc-400">기범이는</Label>
              <Typo.TitleLabel>{characterLabel()}</Typo.TitleLabel>
            </div>
          </div>

          <div className="flex flex-col pb-4 border-b gap-2">
            <Label className="font-bold text-zinc-400">입덕 계기</Label>
            <Typo.BodyText>{motiveOptionLabel()}</Typo.BodyText>
            <Typo.DecsText>{motiveText}</Typo.DecsText>
          </div>

          <div className="flex flex-col pb-4 border-b gap-2">
            <Label className="font-bold text-zinc-400">조아하는 노래</Label>
            <div className="flex flex-wrap w-full gap-1.5">
              {songsLabel().map(({ label, value }) => (
                <SelectButton key={value}>{label}</SelectButton>
              ))}
            </div>
          </div>

          <div className="flex flex-col pb-4 border-b gap-2">
            <Label className="font-bold text-zinc-400">나의 장점</Label>
            <Typo.DecsText>{myText}</Typo.DecsText>
          </div>
        </div>

        <CardFooter className="flex items-center justify-center gap-2">
          <Button className="m-0">돌아가기</Button>
          <Button
          // onClick={onClickSubmit}
          // onClick={type === "apply" ? handleSubmit : handleDownload}
          >
            dlfeks
          </Button>
        </CardFooter>
      </CardContent>
    </div>
  );
}
