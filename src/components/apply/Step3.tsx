import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { hahaData } from "@/constants/index";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Button 수정</CardTitle>
        <CardDescription>아래 버튼을 수정해주세요.</CardDescription>
      </CardHeader>
      <CardContent className="grid w-full gap-1.5">
        <Label htmlFor="mess">
          자신을 뽑아야하는 이유를 작성해주세요.(기범사랑을 표현해주세요)
        </Label>
        <Textarea placeholder="525자 이내로 작성해주세요" id="message" />
      </CardContent>
      <CardContent className="flex flex-wrap gap-2">
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
        <Button variant="outline" onClick={() => setStep(1)}>
          이전
        </Button>
        <Button variant="outline" onClick={() => setStep(3)}>
          다음
        </Button>
      </CardFooter>
    </Card>
  );
}
