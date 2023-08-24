import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle>Button 수정</CardTitle>
        <CardDescription>아래 버튼을 수정해주세요.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {motiveData.map(({ label, value }) => (
          <div key={value} className="flex gap-1.5 leading-none">
            <Checkbox id={value} />
            <Label htmlFor={value}>{label}</Label>
          </div>
        ))}
      </CardContent>
      <CardContent className="grid w-full gap-1.5">
        <Label htmlFor="message">지원 계기(입덕 계기)를 작성해주세요.</Label>
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
    </Card>
  );
}
