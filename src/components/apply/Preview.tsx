import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
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
import { applyData, getYearResult } from "@/firebase/apply";

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
  onClickSubmit?: () => void;
}

export default function Preview({ type, onClickSubmit }: Props) {
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
  const router = useRouter();

  const handleSubmit = () => {
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

    getYearResult();

    router.push("/complete");
  };

  const handleDownload = () => {
    const element = document.getElementById("capture_area");
    console.log(element, "e");
    if (element) {
      domtoimage.toJpeg(element, { quality: 0.95 }).then(function (dataUrl) {
        var el = document.createElement("a");
        console.log(dataUrl, "data");
        el.href = dataUrl;
        el.download = "my-image-name.jpeg"; //다운로드 할 파일명 설정
        el.click();
      });
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            className={`${type !== "apply" ? "w-1/2" : ""} font-bold"`}
          >
            {typeLabel[type].trigger}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="sm:max-w-full lg:max-w-[450px] gab-2">
          <div
            id="capture_area"
            className=" px-2 bg-white sm:max-h-screen overflow-auto "
          >
            <AlertDialogHeader className="mb-2">
              <AlertDialogTitle>Little&Freaks 입사 지원서</AlertDialogTitle>
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
          </div>
          <div className="flex items-center justify-center gap-2">
            <AlertDialogCancel className="m-0">돌아가기</AlertDialogCancel>
            <AlertDialogAction
              onClick={onClickSubmit}
              // onClick={type === "apply" ? handleSubmit : handleDownload}
            >
              {typeLabel[type].action}
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
