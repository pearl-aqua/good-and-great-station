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
import { Badge } from "@/components/ui/badge";
import { album1, album1_1, album2 } from "@/constants/index";
import SelectButton from "../custom/SelectButton";

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
        {album1.map(({ label, value }) => (
          <SelectButton key={value}>{label}</SelectButton>
        ))}
      </CardContent>
      <CardContent className="flex flex-wrap gap-2">
        {album1_1.map(({ label, value }) => (
          <SelectButton key={value}>{label}</SelectButton>
        ))}
      </CardContent>
      <CardContent className="flex flex-wrap gap-2">
        {album2.map(({ label, value }) => (
          <SelectButton key={value}>{label}</SelectButton>
        ))}
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
