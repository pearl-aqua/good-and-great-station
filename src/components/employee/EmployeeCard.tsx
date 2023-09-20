import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Typo from "@/components/typo/Typo";
import SelectButton from "@/components/custom/SelectButton";
import { filterOption, findLabel } from "@/lib/convert";
import {
  album2_1,
  ageData,
  album_package,
  englishData,
  titleData,
} from "@/constants/index";

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
  const { age, newSongs, mbti, title, english, albumPackage } = applyInfoResult;

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

        {title && (
          <div className=" border-b mt-3 ">
            <Label className="font-bold text-zinc-400">
              가장 좋아하는 타이틀곡
            </Label>
            <Typo.TitleLabel>{findLabel(title, titleData)}</Typo.TitleLabel>
          </div>
        )}
        {english && (
          <div className=" border-b mt-3">
            <Label className="font-bold text-zinc-400">
              가장 좋아하는 영어곡
            </Label>
            <Typo.TitleLabel>{findLabel(english, englishData)}</Typo.TitleLabel>
          </div>
        )}
        {albumPackage && (
          <div className=" border-b mt-3">
            <Label className="font-bold text-zinc-400">
              가장 마음에 들었던 앨범 패키지
            </Label>
            <Typo.TitleLabel>
              {findLabel(albumPackage, album_package)}
            </Typo.TitleLabel>
          </div>
        )}
        {(age || mbti.length > 0) && (
          <div className="flex justify-between border-b mt-3">
            {age && (
              <div className="w-1/2">
                <Label className="font-bold text-zinc-400">나이</Label>
                <Typo.TitleLabel>{findLabel(age, ageData)}</Typo.TitleLabel>
              </div>
            )}
            {mbti.length > 0 && (
              <div className="w-[68px]">
                <Label className="font-bold text-zinc-400">MBTI</Label>
                <Typo.TitleLabel>
                  {filterOption(mbti, mbtiData).map(({ label }) => label)}
                </Typo.TitleLabel>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
