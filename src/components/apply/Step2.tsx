import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { album1, album1_1, album2 } from "@/constants/index";
import SelectButton from "../custom/SelectButton";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  return (
    <>
      <CardContent className="flex flex-wrap gap-2">
        <Label>좋아하는 노래를 선택해주세요.(5곡까지 선택 가능)</Label>
      </CardContent>
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
    </>
  );
}
