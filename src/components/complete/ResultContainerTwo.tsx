"use client";
import Result from "./Result";
import Typo from "../typo/Typo";
import { Button } from "../ui/button";
import { album2_1, ListType, ageData } from "@/constants/index";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { getResultTwo } from "@/firebase/apply";
import ResultMbti from "./ResultMbti";
import userStore from "@/lib/store/user";

const findLabel = (selectedValue: string, list: ListType[]) => {
  const findList = list.find(({ value }) => value === selectedValue);
  return findList?.label || "";
};

const getConvertData = (
  list: ListType[],
  result: { label: string; value: number }[] | undefined,
  totalResult: number
) => {
  return result?.map((el) => {
    return {
      label: findLabel(el.label, list),
      value: `${((+el.value / +totalResult) * 100).toFixed(1)}%`,
    };
  });
};

const percent = (value: number, total: number) => {
  return `${((value / total) * 100).toFixed(1)}%`;
};

const convertMbti = (result: any, total: number) => {
  if (result) {
    const eData = [
      {
        label: "E",
        value: percent(result["2001"], total),
        high: result["2001"] >= result["2002"],
      },
      {
        label: "I",
        value: percent(result["2002"], total),
        high: result["2001"] < result["2002"],
      },
    ];
    const nData = [
      {
        label: "N",
        value: percent(result["2003"], total),
        high: result["2003"] >= result["2004"],
      },
      {
        label: "S",
        value: percent(result["2004"], total),
        high: result["2003"] < result["2004"],
      },
    ];
    const tData = [
      {
        label: "T",
        value: percent(result["2005"], total),
        high: result["2005"] >= result["2006"],
      },
      {
        label: "F",
        value: percent(result["2006"], total),
        high: result["2005"] < result["2006"],
      },
    ];
    const jData = [
      {
        label: "J",
        value: percent(result["2007"], total),
        high: result["2007"] >= result["2008"],
      },
      {
        label: "P",
        value: percent(result["2008"], total),
        high: result["2007"] < result["2008"],
      },
    ];

    return [eData, nData, tData, jData];
  }
};

const convertBestMbti = (result: any) => {
  if (result) {
    const eText = result["2001"] >= result["2002"] ? "E" : "I";
    const nText = result["2003"] >= result["2004"] ? "N" : "S";
    const tText = result["2005"] >= result["2006"] ? "T" : "F";
    const jText = result["2007"] >= result["2008"] ? "J" : "P";
    return `${eText}${nText}${tText}${jText}`;
  }
};

export default function ResultContainerTwo() {
  const [data, setData] = useState<any>({});
  useAuth();
  const getData = async () => {
    const result = await getResultTwo();
    setData(result);
  };
  useEffect(() => {
    getData();
  }, []);

  const { applyNumber } = userStore();

  const router = useRouter();
  const { ageResult, newSongsResult, mbtiResult, totalResult } = data;

  const convertAgeData = getConvertData(ageData, ageResult, totalResult?.age);
  const convertNewSongsData = getConvertData(
    album2_1,
    newSongsResult,
    totalResult?.newSongs
  );

  const convertMbtiData = convertMbti(mbtiResult, totalResult?.mbti);

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="mb-4 flex flex-col items-center">
        <Typo.H2>직원 현황</Typo.H2>
      </div>
      <Result
        data={{
          title: "Good & Great에서 좋아하는 노래",
          list: convertNewSongsData,
        }}
        total={totalResult?.age}
      />
      <ResultMbti
        data={{
          title: "MBTI",
          list: convertMbtiData,
          best: convertBestMbti(mbtiResult),
        }}
        total={totalResult?.mbti}
      />
      <Result
        data={{ title: "나이", list: convertAgeData }}
        total={totalResult?.newSongs}
      />
      {/* <div>
        <Button
          className="text-zinc-400"
          variant="link"
          onClick={() => router.push("/card-result")}
        >
          입사 지원 현황 보러가기
        </Button>
        <Button
          className="text-zinc-400"
          variant="link"
          onClick={() => router.push(`/my-lilfreaks/${applyNumber}`)}
        >
          나의 정보 보기
        </Button>
      </div> */}
    </div>
  );
}
