"use client";

import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListType } from "@/constants/index";
import { clickShareButton, getSendText } from "@/lib/util/index";
import Typo from "../typo/Typo";
import ResultRow from "./ResultRow";

interface Props {
  data: {
    list?: ListType[];
    title: string;
  };
  total?: number;
  show?: boolean;
  myValue?: string;
  showLink?: boolean;
}

const getOptionWidth = (count: number) => {
  if (!count) {
    return 0;
  }

  const widthNum = Math.round((count / 100) * 270);

  return widthNum;
};

const url = "little-and-freaks.vercel.app";

const covertPercentString = (count: number, totalNum: number) => {
  return `${((count / totalNum) * 100).toFixed(1)}%`;
};

const covertPercentNumber = (count: number, totalNum: number) => {
  return ((count / totalNum) * 100).toFixed(1);
};

export default function Result({
  data,
  total,
  myValue,
  showLink = false,
}: Props) {
  const [showMore, setShowMore] = useState<boolean>(false);

  const { title, list = [] } = data || {};

  const myOption: ListType | undefined = list?.find(
    ({ value }) => value === myValue
  );

  const sliceList = !showMore ? list?.slice(1, 8) : list?.slice(1, list.length);
  const seeShowMore = list.length > 8;
  const sendText = getSendText(
    title,
    myOption?.label || "",
    covertPercentString(myOption?.count || 0, total || 0)
  );

  const labelText =
    list[0]?.value === myValue ? `${list[0]?.label} ✔️` : list[0]?.label;

  return (
    <Card className="w-[320px] pb-4">
      {list.length > 0 && (
        <>
          <CardHeader className="flex flex-row w-full items-center justify-between pt-7">
            <CardDescription className="w-[200px]">{title}</CardDescription>
            {total && (
              <div className="text-xs text-zinc-400">{`(총 ${
                total || 0
              }표)`}</div>
            )}
          </CardHeader>
          <div className="relative flex flex-col w-full">
            <CardContent className="w-full flex justify-between items-end text-zinc-800 z-10 pb-4">
              <div className="text-lg font-bold">{labelText}</div>
              <Typo.BodyText color="text-zinc-400">
                {list[0]?.count &&
                  total &&
                  covertPercentString(list[0]?.count, total)}
              </Typo.BodyText>
            </CardContent>
            <div
              className={`absolute top-2 right-6 bg-gray-100 h-5 z-0`}
              style={{
                width: getOptionWidth(
                  +covertPercentNumber(list[0]?.count || 0, total || 0)
                ),
              }}
            ></div>
          </div>

          <CardContent className="pb-2">
            {sliceList?.map(({ label, count, value }) => (
              <ResultRow
                key={label}
                label={label}
                value={covertPercentNumber(count || 0, total || 0)}
                select={value === myValue}
              />
            ))}
          </CardContent>

          <CardFooter className={`flex w-full justify-between py-0`}>
            {showLink && myValue && (
              <Button
                className="p-0 text-blue-300"
                variant="link"
                onClick={() => clickShareButton(sendText, url)}
              >
                공유하기
              </Button>
            )}
            {seeShowMore && (
              <>
                {!showMore ? (
                  <Button
                    className="p-0 text-zinc-400"
                    variant="link"
                    onClick={() => setShowMore(true)}
                  >
                    더보기
                  </Button>
                ) : (
                  <Button
                    className="p-0 text-zinc-400"
                    variant="link"
                    onClick={() => setShowMore(false)}
                  >
                    덜보기
                  </Button>
                )}
              </>
            )}
          </CardFooter>
        </>
      )}
      {!list.length && (
        <div className="w-full h-[184px] flex justify-center items-center">
          <BeatLoader size={12} color="#bfdbfe" />
        </div>
      )}
    </Card>
  );
}
