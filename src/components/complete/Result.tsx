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

export default function Result({ data }) {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { title, list } = data;

  const sliceList = !showMore ? list.slice(1, 4) : list.slice(1, list.length);
  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-end">
        <Typo.Title>{list[0].label}</Typo.Title>
        <Typo.BodyText>{list[0].value}</Typo.BodyText>
      </CardContent>
      <CardContent>
        {sliceList.map(({ label, value }) => (
          <ResultRow key={label} label={label} value={value} />
        ))}
      </CardContent>
      <CardFooter className="gap-2">
        {!showMore ? (
          <Button variant="ghost" onClick={() => setShowMore(true)}>
            더보기
          </Button>
        ) : (
          <Button variant="ghost" onClick={() => setShowMore(false)}>
            덜보기
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
