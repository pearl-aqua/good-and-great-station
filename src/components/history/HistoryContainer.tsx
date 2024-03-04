"use client";

import {
  hahaData,
  motiveData,
  yearData,
  songsData,
  album2_1,
  ageData,
  album_package,
  titleData,
  englishData,
} from "@/constants/index";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import HistoryResult from "./HistoryResult";

export default function HistoryContainer() {
  const router = useRouter();

  const list = [
    {
      title: "Good & Great에서 좋아하는 노래",
      data: album2_1,
      fieldName: "newSongs",
    },
    {
      title: "전체 곡 중 좋아하는 노래",
      data: songsData,
      fieldName: "songs",
    },
    {
      title: "가장 좋아하는 타이틀곡",
      data: titleData,
      fieldName: "title",
    },
    {
      title: "가장 좋아하는 영어곡",
      data: englishData,
      fieldName: "english",
    },
    {
      title: "가장 마음에 들었던 앨범 패키지",
      data: album_package,
      fieldName: "albumPackage",
    },
    {
      title: "입덕 시기",
      data: yearData,
      fieldName: "year",
    },
    {
      title: "입덕 계기",
      data: motiveData,
      fieldName: "motive",
    },

    {
      title: "기범이는",
      data: hahaData,
      fieldName: "haha",
    },
    {
      title: "나이대",
      data: ageData,
      fieldName: "age",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full gap-4">
      {list.map(({ data, title, fieldName }) => (
        <HistoryResult listData={data} title={title} fieldName={fieldName} />
      ))}

      <div>
        <Button
          className="text-zinc-400"
          variant="link"
          onClick={() => router.push("/")}
        >
          홈으로
        </Button>
      </div>
    </div>
  );
}
