import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import answerStore from "@/lib/store/answers";
import userStore from "@/lib/store/user";
import SelectButton from "../custom/SelectButton";
import Typo from "../typo/Typo";

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

interface Props {
  type: "apply" | "complete";
}

export default function Preview({ type }: Props) {
  const {
    name,
    yearLabel,
    motiveText,
    myText,
    motiveOptionLabel,
    songsLabel,
    characterLabel,
  } = answerStore();
  const { setApplyNumber } = userStore();
  const router = useRouter();

  const handleSubmit = () => {
    // applyNumber를 받아와야 함
    setApplyNumber(1);
    router.push("/complete");
  };

  const handleDownload = () => {
    const element = document.getElementById("capture_area");
    console.log(element, "e");
    if (element) {
      html2canvas(element).then(function (canvas) {
        var el = document.createElement("a");
        el.href = canvas.toDataURL("image/jpeg");
        el.download = "이미지.jpg"; //다운로드 할 파일명 설정
        el.click();
      });
    }
  };

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
      <AlertDialogContent className="sm:max-w-[425px] gab-2">
        <div id="capture_area" className="p-8 ">
          <AlertDialogHeader className="mb-2">
            <AlertDialogTitle>
              Little&Freaks 입사 지원서 미리보기
            </AlertDialogTitle>
          </AlertDialogHeader>
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
                {songsLabel.map(({ label, value }) => (
                  <SelectButton key={value}>{label}</SelectButton>
                ))}
              </div>
            </div>

            <div className="flex flex-col pb-4 border-b gap-2">
              <Label className="font-bold text-zinc-400">나의 장점</Label>
              <Typo.DecsText>{myText}</Typo.DecsText>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <AlertDialogCancel>돌아가기</AlertDialogCancel>
          <AlertDialogAction onClick={handleDownload}>
            {typeLabel[type].action}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
