import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Typo from "@/components/typo/Typo";
import SelectButton from "@/components/custom/SelectButton";
import { filterOption, findLabel } from "@/lib/convert";
import { album2_1, ageData } from "@/constants/index";

const mbtiData = [
  { label: "E", value: "2001" },
  { label: "I", value: "2002" },
  { label: "N", value: "2003" },
  { label: "S", value: "2004" },
  { label: "T", value: "2005" },
  { label: "F", value: "2006" },
  { label: "J", value: "2007" },
  { label: "P", value: "2008" },
];

export default function EmployeeCard({ applyInfoResult }: any) {
  const { age, newSongs, mbti } = applyInfoResult;

  return (
    <Card className="px-2">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-zinc-500">입사 기록 카드</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:max-w-full lg:max-w-[450px]">
        <div className="flex flex-col pb-4 border-b gap-3">
          <Label className="font-bold text-zinc-400">
            Good & Great 앨범에서 좋아하는 노래
          </Label>
          <div className="flex flex-wrap w-full gap-1.5">
            {filterOption(newSongs, album2_1).map(({ label, value }) => (
              <SelectButton key={value}>{label}</SelectButton>
            ))}
          </div>
        </div>

        <div className="flex justify-between border-b mt-3">
          <div className="w-1/2">
            <Label className="font-bold text-zinc-400">나이</Label>
            <Typo.TitleLabel>{findLabel(age, ageData)}</Typo.TitleLabel>
          </div>
          <div className="w-[68px]">
            <Label className="font-bold text-zinc-400">MBTI</Label>
            <Typo.TitleLabel>
              {filterOption(mbti, mbtiData).map(({ label }) => label)}
            </Typo.TitleLabel>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
