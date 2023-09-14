import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Typo from "@/components/typo/Typo";
import SelectButton from "@/components/custom/SelectButton";
import { filterLabel, filterOption, findLabel } from "@/lib/convert";
import {
  album1,
  album1_1,
  album2,
  hahaData,
  motiveData,
  yearData,
} from "@/constants/index";

export default function ApplyCard({ applyInfoResult }: any) {
  const { name, year, songs, character, motiveOption, myText, motiveText } =
    applyInfoResult;

  return (
    <Card className="px-2">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-zinc-500">입사 지원서</CardTitle>
      </CardHeader>
      <CardContent className="sm:max-w-full lg:max-w-[450px] gab-2">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between border-b">
            <div className="w-1/2">
              <Label className="font-bold text-zinc-400">이름</Label>
              <Typo.TitleLabel>{name}</Typo.TitleLabel>
            </div>

            <div className="w-1/4">
              <Label className="font-bold text-zinc-400">입덕 시기</Label>
              <Typo.TitleLabel>{findLabel(year, yearData)}</Typo.TitleLabel>
            </div>

            <div className="w-[68px]">
              <Label className="font-bold text-zinc-400">기범이는</Label>
              <Typo.TitleLabel>
                {findLabel(character, hahaData)}
              </Typo.TitleLabel>
            </div>
          </div>

          <div className="flex flex-col pb-4 border-b gap-2">
            <Label className="font-bold text-zinc-400">입덕 계기</Label>
            <Typo.BodyText>
              {filterLabel(motiveOption, motiveData)}
            </Typo.BodyText>
            {motiveText && <Typo.DecsText>{motiveText}</Typo.DecsText>}
          </div>

          <div className="flex flex-col pb-4 border-b gap-3">
            <Label className="font-bold text-zinc-400">
              Good & Great 이전 앨범 중 좋아하는 노래
            </Label>
            <div className="flex flex-wrap w-full gap-1.5">
              {filterOption(songs, [...album1, ...album1_1, ...album2]).map(
                ({ label, value }) => (
                  <SelectButton key={value}>{label}</SelectButton>
                )
              )}
            </div>
          </div>

          {myText && (
            <div className="flex flex-col pb-4 border-b gap-2">
              <Label className="font-bold text-zinc-400">나의 기범 사랑</Label>
              <Typo.DecsText>{myText}</Typo.DecsText>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
