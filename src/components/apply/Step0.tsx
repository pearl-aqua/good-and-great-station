import { CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { yearData } from "@/constants/index";
import answerStore from "@/lib/store/answers";
import AlertModal from "../alert/AlertModal";
import Router from "next/router";
import { useRouter } from "next/navigation";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  const { name, setName, year, setYear, setInfo } = answerStore();
  const router = useRouter();

  const validName = () => {
    if (name.length > 8) alert("이름은 8자 이내로 작성해주세요.");
    else setStep(1);
  };

  const handleCancel = () => {
    setInfo({}); // Todo
    router.push("/");
  };

  return (
    <>
      <CardContent className="flex flex-col max-w-sm gap-1">
        <div className="flex items-center">
          <Label className="w-40">이름(닉네임)</Label>
          <CardDescription
            className={`w-full flex justify-end ${
              name.length > 8 ? "text-red-500" : ""
            }`}
          >
            {name.length}/8
          </CardDescription>
        </div>
        <Input
          type="text"
          placeholder="1자-8자로 작성해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        <Label>입덕 시기</Label>
        <Select
          onValueChange={(e) => setYear(e)}
          defaultValue={year || undefined}
        >
          <SelectTrigger className="w-[180px] text-zinc-600">
            <SelectValue placeholder="선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <ScrollArea className="h-[200px]">
              {yearData.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className="justify-between">
        <AlertModal
          text="취소하겠습니까? 입력하신 내용은 모두 사라집니다."
          trigger="취소"
          onConfirm={handleCancel}
        ></AlertModal>
        <Button variant="outline" onClick={validName}>
          다음
        </Button>
      </CardFooter>
    </>
  );
}
