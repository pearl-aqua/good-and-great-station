import { CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { hahaData } from "@/constants/index";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Preview from "./Preview";
import answerStore from "@/lib/store/answers";
import { applyData, getYearResult } from "@/firebase/apply";
import userStore from "@/lib/store/user";
import { useRouter } from "next/navigation";
import AlertModal from "../alert/AlertModal";
import { useRef, useState } from "react";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const {
    name,
    year,
    setCharacter,
    motiveText,
    myText,
    motiveOption,
    setMyText,
    songs,
    character,
  } = answerStore();
  const { setApplyNumber, userId } = userStore();
  const router = useRouter();

  const handleSubmit = () => {
    if (userId) {
      const applyNumber = Date.now().toString();
      setApplyNumber(applyNumber);
      applyData({
        applyNumber,
        applyData: {
          name,
          year,
          motiveText,
          myText,
          motiveOption,
          songs,
          character,
        },
        userId,
      });
    }

    getYearResult();

    router.push("/complete");
  };

  const confirmText = "제출 하시겠습니까? 제출 이후에는 수정이 불가능합니다.";

  const onClickSubmit = () => {
    setConfirmOpen(true);
  };

  return (
    <>
      <CardContent className="grid w-full gap-3">
        <div className="flex items-center w-full justify-between">
          <Label className="w-66">
            자신의 장점을 작성해주세요.(기범사랑을 표현해주세요)
          </Label>
          <CardDescription
            className={`flex justify-end ${
              myText.length > 129 ? "text-red-500" : ""
            }`}
          >
            {myText.length}/129
          </CardDescription>
        </div>

        <Textarea
          className="w-full h-[132px]"
          placeholder="129자 이내로 작성해주세요"
          value={myText}
          onChange={(e) => setMyText(e.target.value)}
        />
      </CardContent>
      <CardContent className="flex flex-col gap-4">
        <Label htmlFor="mess">기범이는 무엇일까요?</Label>
        <RadioGroup onValueChange={setCharacter} defaultValue={character}>
          {hahaData.map(({ label, value }) => (
            <div key={value} className="flex gap-1.5 leading-none">
              <RadioGroupItem id={value} value={value} />
              <Label htmlFor={value}>{label}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" onClick={() => setStep(2)}>
          이전
        </Button>
        <AlertModal
          open={confirmOpen}
          trigger={undefined}
          text={confirmText}
          onConfirm={handleSubmit}
        />
        <Preview type="apply" onClickSubmit={onClickSubmit} />
      </CardFooter>
    </>
  );
}
