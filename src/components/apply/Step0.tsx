import { CardContent, CardFooter } from "@/components/ui/card";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { yearData } from "@/constants/index";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  return (
    <>
      <CardContent className="flex flex-col max-w-sm gap-2">
        <Label>이름(닉네임)</Label>
        <Input type="text" placeholder="1자 이상 작성해주세요" />
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        <Label>입덕 시기</Label>
        <Select>
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
      <CardFooter className="gap-2">
        <Button variant="outline" onClick={() => setStep(0)}>
          취소
        </Button>
        <Button variant="outline" onClick={() => setStep(1)}>
          다음
        </Button>
      </CardFooter>
    </>
  );
}