import Result from "./Result";
import Typo from "../typo/Typo";
import { Button } from "../ui/button";
import { getResult } from "@/firebase/apply";
import { hahaData, motiveData, yearData, songsData } from "@/constants/index";

const findLabel = (
  selectedValue: string,
  list: { value: string; label: string }[]
) => {
  const findList = list.find(({ value }) => value === selectedValue);
  return findList?.label || "";
};

const getConvertData = (list, result, totalResult) => {
  return result.map(([value, count]) => {
    const label = findLabel(value, list);
    return {
      label: findLabel(value, list),
      value: `${((+count / +totalResult) * 100).toFixed(1)}%`,
    };
  });
};

export default async function ResultContainer() {
  const { yearResult, totalResult, motiveResult, songsResult, hahaResult } =
    await getResult();

  const convertYearData = getConvertData(
    yearData,
    yearResult,
    totalResult.year
  );
  const convertMotiveData = getConvertData(
    motiveData,
    motiveResult,
    totalResult.motive
  );
  const convertHahaData = getConvertData(
    hahaData,
    hahaResult,
    totalResult.haha
  );
  const convertSongsData = getConvertData(
    songsData,
    songsResult,
    totalResult.songs
  );

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Typo.H2>지원 현황</Typo.H2>
      <Result data={{ title: "입덕 시기", list: convertYearData }} />
      <Result data={{ title: "입덕 계기", list: convertMotiveData }} />
      <Result data={{ title: "좋아하는 노래", list: convertSongsData }} />
      <Result data={{ title: "기범이는", list: convertHahaData }} />
      <Button variant="ghost">지원 공고 돌아가기</Button>
    </div>
  );
}
