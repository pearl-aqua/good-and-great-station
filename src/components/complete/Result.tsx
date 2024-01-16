"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Typo from "../typo/Typo";
import ResultRow from "../goodAndGreat/custom/ResultRow";
import { useState } from "react";
import { ListType } from "@/constants/index";
import BeatLoader from "react-spinners/BeatLoader";
import { clickShareButton, getSendText } from "@/lib/util/index";

interface Props {
  data: {
    list?: ListType[];
    title: string;
  };
  total?: number;
  show?: boolean;
  myValue?: string;
}

const url = "little-and-freaks.vercel.app";

const covertPercent = (count: number, totalNum: number) => {
  return `${((count / totalNum) * 100).toFixed(1)}%`;
};

export default function Result({ data, total, show = false, myValue }: Props) {
  const [showMore, setShowMore] = useState<boolean>(show);
  const { title, list } = data || {};

  const myOption: ListType | undefined = list?.find(
    ({ value }) => value === myValue
  );

  const sliceList = !showMore ? list?.slice(1, 4) : list?.slice(1, list.length);
  const sendText = getSendText(
    title,
    myOption?.label || "",
    covertPercent(myOption?.count || 0, total || 0)
  );

  return (
    <Card className="w-[320px]">
      <CardHeader className="flex flex-row w-full items-center justify-between">
        <CardDescription>{title}</CardDescription>
        {total && (
          <div className="text-xs text-zinc-400">{`(총 ${total || 0}표)`}</div>
        )}
      </CardHeader>
      {list ? (
        <>
          <CardContent className="flex justify-between items-end text-blue-800">
            <Typo.Title>{list[0].label}</Typo.Title>
            <Typo.BodyText color="text-blue-400">
              {covertPercent(list[0]?.count || 0, total || 0)}
            </Typo.BodyText>
          </CardContent>
          <CardContent>
            {sliceList?.map(({ label, count }) => (
              <ResultRow
                key={label}
                label={label}
                value={covertPercent(count || 0, total || 0)}
              />
            ))}
          </CardContent>
        </>
      ) : (
        <div className="w-full h-[184px] flex justify-center items-center">
          <BeatLoader size={12} color="#a1a1aa" />
        </div>
      )}

      {
        <CardFooter className="flex w-full justify-end">
          {!show &&
            (!showMore ? (
              <Button
                className="p-0 text-zinc-500"
                variant="link"
                onClick={() => setShowMore(true)}
              >
                더보기
              </Button>
            ) : (
              <Button
                className="p-0 text-zinc-500"
                variant="link"
                onClick={() => setShowMore(false)}
              >
                덜보기
              </Button>
            ))}
          <Button
            className="p-0 text-zinc-500"
            variant="link"
            onClick={() => clickShareButton(sendText, url)}
          >
            공유하기
          </Button>
        </CardFooter>
      }
    </Card>
  );
}
