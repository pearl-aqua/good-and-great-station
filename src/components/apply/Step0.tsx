import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle>Button 수정</CardTitle>
        <CardDescription>아래 버튼을 수정해주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>이름 or 닉네임</Label>
          <Input type="text" placeholder="작성해주세요" />
        </div>
      </CardContent>
      <CardContent>
        <Label>입뎍 시기</Label>

        <Select>
          <SelectTrigger className="w-[180px]">
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
      <CardFooter>
        <Button variant="outline" onClick={() => setStep(1)}>
          next
        </Button>
      </CardFooter>
    </Card>
  );
}
