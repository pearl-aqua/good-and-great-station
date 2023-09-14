"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Typo from "../typo/Typo";
import { ListType } from "@/constants/index";
import BeatLoader from "react-spinners/BeatLoader";
import MbtiRow from "../custom/MbtiRow";

interface Props {
  data: {
    list?: ListType[];
    title: string;
    best: string;
  };
}

export default function ResultMbti({ data }: Props) {
  const { title, best, list } = data;

  return (
    <Card className="w-[320px]">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      {list ? (
        <>
          <CardContent className="flex w-full">
            <Typo.Title>{best}</Typo.Title>
          </CardContent>
          <CardContent className="w-full">
            {list.map((el, index) => (
              <MbtiRow key={index} data={el} />
            ))}
          </CardContent>
        </>
      ) : (
        <div className="w-full h-[184px] flex justify-center items-center">
          <BeatLoader size={12} color="#a1a1aa" />
        </div>
      )}
    </Card>
  );
}
