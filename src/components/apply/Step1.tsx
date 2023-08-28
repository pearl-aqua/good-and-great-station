import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motiveData } from "@/constants/index";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  return (
    <>
      <CardContent className="flex flex-col gap-3">
        <Label>지원(입덕) 계기를 선택해주세요.(복수 선택 가능)</Label>
        <div className="flex flex-wrap gap-2.5">
          {motiveData.map(({ label, value }) => (
            <div key={value} className="flex gap-1.5 leading-none">
              <Checkbox id={value} />
              <Label htmlFor={value} className="text-zinc-600">
                {label}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardContent className="grid w-full gap-2">
        <Label htmlFor="message">지원(입덕) 계기를 서술해주세요.</Label>
        <Textarea placeholder="525자 이내로 작성해주세요" id="message" />
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" onClick={() => setStep(0)}>
          이전
        </Button>
        <Button variant="outline" onClick={() => setStep(2)}>
          다음
        </Button>
      </CardFooter>
    </>
  );
}
