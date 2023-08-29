import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { hahaData } from "@/constants/index";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import Preview from "./Preview";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  return (
    <>
      <CardContent className="grid w-full gap-3">
        <Label htmlFor="mess">
          자신의 장점을 작성해주세요.(기범사랑을 표현해주세요)
        </Label>
        <Textarea placeholder="525자 이내로 작성해주세요" id="message" />
      </CardContent>
      <CardContent className="flex flex-col gap-4">
        <Label htmlFor="mess">기범이는 무엇일까요?</Label>
        <RadioGroup>
          {hahaData.map(({ label, value }) => (
            <div key={value} className="flex gap-1.5 leading-none">
              <RadioGroupItem id={value} value={value} />
              <Label htmlFor={value}>{label}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" onClick={() => setStep(2)}>
          이전
        </Button>
        <Preview />
      </CardFooter>
    </>
  );
}