import { CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motiveData } from "@/constants/index";
import answerStore from "@/lib/store/answers";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  const { motiveOption, setMotiveOption, motiveText, setMotiveText } =
    answerStore();

  const handleOption = (value: string) => {
    if (motiveOption.includes(value)) {
      const newOptions = motiveOption.filter((el) => el !== value);
      setMotiveOption(newOptions);
    } else {
      setMotiveOption([...motiveOption, value]);
    }
  };
  const validText = () => {
    if (motiveText.length > 129)
      alert("지원 계기는은 129자 이내로 작성해주세요.");
    else setStep(2);
  };
  return (
    <>
      <CardContent className="flex flex-col gap-3">
        <Label>지원(입덕) 계기를 선택해주세요.(복수 선택 가능)</Label>
        <div className="flex flex-wrap gap-2.5">
          {motiveData.map(({ label, value }) => (
            <div key={value} className="flex gap-1.5 leading-none">
              <Checkbox
                checked={motiveOption.includes(value)}
                onCheckedChange={() => handleOption(value)}
              />
              <Label htmlFor={value} className="text-zinc-600">
                {label}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardContent className="grid w-full gap-2">
        <div className="flex items-center w-full justify-between">
          <Label className="w-62">지원(입덕) 계기를 서술해주세요.</Label>
          <CardDescription
            className={`flex justify-end ${
              motiveText.length > 129 ? "text-red-500" : ""
            }`}
          >
            {motiveText.length}/129
          </CardDescription>
        </div>

        <Textarea
          className="w-full h-[132px]"
          placeholder="129자 이내로 작성해주세요"
          value={motiveText}
          onChange={(e) => setMotiveText(e.target.value)}
        />
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" onClick={() => setStep(0)}>
          이전
        </Button>
        <Button variant="outline" onClick={validText}>
          다음
        </Button>
      </CardFooter>
    </>
  );
}
