"use client";
import Result from "./Result";
import Typo from "../typo/Typo";
import { Button } from "../ui/button";
import {
  hahaData,
  motiveData,
  yearData,
  songsData,
  ListType,
} from "@/constants/index";
import { useRouter } from "next/navigation";

const findLabel = (selectedValue: string, list: ListType[]) => {
  const findList = list.find(({ value }) => value === selectedValue);
  return findList?.label || "";
};

const getConvertData = (
  list: ListType[],
  result: [string, any][] | undefined,
  totalResult: number
) => {
  return result?.map((el) => {
    return {
      label: findLabel(el[0], list),
      value: `${((+el[1] / +totalResult) * 100).toFixed(1)}%`,
    };
  });
};

interface Props {
  data: {
    yearResult: any;
    totalResult: any;
    motiveResult: any;
    songsResult: any;
    hahaResult: any;
  };
}

export default function ResultContainer({ data }: Props) {
  const router = useRouter();
  const { yearResult, totalResult, motiveResult, songsResult, hahaResult } =
    data;

  const convertYearData = getConvertData(
    yearData,
    yearResult,
    totalResult?.year
  );
  const convertMotiveData = getConvertData(
    motiveData,
    motiveResult,
    totalResult?.motive
  );
  const convertHahaData = getConvertData(
    hahaData,
    hahaResult,
    totalResult?.haha
  );
  const convertSongsData = getConvertData(
    songsData,
    songsResult,
    totalResult?.songs
  );

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="mb-4">
        <Typo.H2>지원 현황</Typo.H2>
        <Typo.BodyText color="text-zinc-500">{`총 ${totalResult.year}명 지원`}</Typo.BodyText>
      </div>
      <Result data={{ title: "입덕 시기", list: convertYearData }} />
      <Result data={{ title: "입덕 계기", list: convertMotiveData }} />
      <Result data={{ title: "좋아하는 노래", list: convertSongsData }} />
      <Result data={{ title: "기범이는", list: convertHahaData }} />
      <Button variant="ghost" onClick={() => router.push("/")}>
        지원 공고 돌아가기
      </Button>
    </div>
  );
}
