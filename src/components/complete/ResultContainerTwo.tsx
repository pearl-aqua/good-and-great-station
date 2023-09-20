"use client";
import Result from "./Result";
import Typo from "../typo/Typo";
import { Button } from "../ui/button";
import {
  album2_1,
  ListType,
  ageData,
  album_package,
  titleData,
  englishData,
} from "@/constants/index";
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
  return ((value / total) * 100).toFixed(1);
};

const convertMbti = (result: any, total: number) => {
  if (result) {
    const eData = [
      {
        label: "E",
        value: percent(result["2001"], result["2001"] + result["2002"]),
        high: result["2001"] >= result["2002"],
      },
      {
        label: "I",
        value: percent(result["2002"], result["2001"] + result["2002"]),
        high: result["2001"] < result["2002"],
      },
    ];
    const nData = [
      {
        label: "N",
        value: percent(result["2003"], result["2003"] + result["2004"]),
        high: result["2003"] >= result["2004"],
      },
      {
        label: "S",
        value: percent(result["2004"], result["2003"] + result["2004"]),
        high: result["2003"] < result["2004"],
      },
    ];
    const tData = [
      {
        label: "T",
        value: percent(result["2005"], result["2005"] + result["2006"]),
        high: result["2005"] >= result["2006"],
      },
      {
        label: "F",
        value: percent(result["2006"], result["2005"] + result["2006"]),
        high: result["2005"] < result["2006"],
      },
    ];
    const jData = [
      {
        label: "J",
        value: percent(result["2007"], result["2007"] + result["2008"]),
        high: result["2007"] >= result["2008"],
      },
      {
        label: "P",
        value: percent(result["2008"], result["2007"] + result["2008"]),
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
  // useAuth();
  const getData = async () => {
    const result = await getResultTwo();
    setData(result);
  };

  const { userId, applyNumber, cardSubmit } = userStore();

  useEffect(() => {
    getData();
  }, [cardSubmit, applyNumber]);

  const router = useRouter();
  const {
    ageResult,
    newSongsResult,
    mbtiResult,
    titleResult,
    englishResult,
    albumPackageResult,
    totalResult,
  } = data;

  const convertAgeData = getConvertData(ageData, ageResult, totalResult?.age);
  const convertTitleData = getConvertData(
    titleData,
    titleResult,
    totalResult?.title
  );

  const convertEnglishData = getConvertData(
    englishData,
    englishResult,
    totalResult?.english
  );

  const convertAlbumPackageData = getConvertData(
    album_package,
    albumPackageResult,
    totalResult?.albumPackage
  );

  const convertNewSongsData = getConvertData(
    album2_1,
    newSongsResult,
    totalResult?.newSongs
  );

  const convertMbtiData = convertMbti(mbtiResult, totalResult?.mbti);

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="mb-3 flex flex-col items-center">
        <Typo.H2>Little&Freaks 직원 현황</Typo.H2>
        <div className="text-xs text-zinc-400">투표기간: 9/20~9/23</div>
        {!userId && (
          <div className="flex flex-col justify-center mt-4">
            <div className="text-xs text-zinc-400">
              투표를 위해서는 로그인이 필요합니다
            </div>
            <Button
              className="text-zinc-400"
              variant="link"
              onClick={() => router.push("/login")}
            >
              로그인 하기
            </Button>
          </div>
        )}
        {userId && !applyNumber && (
          <Button
            className="text-zinc-400"
            variant="link"
            onClick={() => router.push("/employee-card")}
          >
            투표 하기
          </Button>
        )}
      </div>
      <Result
        data={{
          title: "Good & Great에서 좋아하는 노래",
          list: convertNewSongsData,
        }}
        total={totalResult?.newSongs}
        show={true}
      />
      <Result
        data={{ title: "가장 좋아하는 타이틀곡", list: convertTitleData }}
        total={totalResult?.title}
        show={true}
      />
      <Result
        data={{ title: "가장 좋아하는 영어곡", list: convertEnglishData }}
        total={totalResult?.english}
        show={true}
      />
      <Result
        data={{
          title: "가장 마음에 들었던 앨범 패키지",
          list: convertAlbumPackageData,
        }}
        total={totalResult?.albumPackage}
        show={true}
      />
      <ResultMbti
        data={{
          title: "MBTI",
          list: convertMbtiData,
          best: convertBestMbti(mbtiResult) || "",
        }}
        total={totalResult?.mbti}
      />
      <Result
        data={{ title: "나이", list: convertAgeData }}
        total={totalResult?.age}
        show={true}
      />
    </div>
  );
}
