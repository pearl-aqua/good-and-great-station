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
import ResultRow from "../custom/ResultRow";
import { useState } from "react";
import { ListType } from "@/constants/index";
import BeatLoader from "react-spinners/BeatLoader";

interface Props {
  data: {
    list?: ListType[];
    title: string;
  };
  total?: number;
}

export default function Result({ data, total }: Props) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { title, list } = data;

  const sliceList = !showMore ? list?.slice(1, 4) : list?.slice(1, list.length);

  return (
    <Card className="w-[320px]">
      <CardHeader className="flex flex-row w-full items-center justify-between">
        <CardDescription>{title}</CardDescription>
        {total && (
          <div className="text-xs text-zinc-400">{`(총 ${total}명)`}</div>
        )}
      </CardHeader>
      {list ? (
        <>
          <CardContent className="flex justify-between items-end">
            <Typo.Title>{list[0].label}</Typo.Title>
            <Typo.BodyText color="text-zinc-400">{list[0].value}</Typo.BodyText>
          </CardContent>
          <CardContent>
            {sliceList?.map(({ label, value }) => (
              <ResultRow key={label} label={label} value={value} />
            ))}
          </CardContent>
        </>
      ) : (
        <div className="w-full h-[184px] flex justify-center items-center">
          <BeatLoader size={12} color="#a1a1aa" />
        </div>
      )}

      <CardFooter className="flex w-full justify-end">
        {!showMore ? (
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
        )}
      </CardFooter>
    </Card>
  );
}
