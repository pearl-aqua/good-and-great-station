"use client";

import { useEffect, useState } from "react";
import Typo from "../typo/Typo";
import MemoInput from "../memo/MemoInput";
import Poll from "../poll/Poll";

const keyDay = new Date(2024, 0, 27, 18);
const title = "KEYLAND";
const subTitle = "ON: AND ON";

const diffTime = () => {
  const nowDay = new Date();
  const keyDay = new Date(2024, 0, 27, 18);

  const diff = keyDay.getTime() - nowDay.getTime();

  const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  return {
    diffDay,
    diffHour,
    diffMin,
    diffSec,
  };
};

export default function Home() {
  const [innerText, setInnerText] = useState<{
    diffDay: string;
    diffHour: string;
    diffMin: string;
    diffSec: string;
  }>({
    diffDay: "",
    diffHour: "",
    diffMin: "",
    diffSec: "",
  });

  // useEffect(() => {}, []);

  setInterval(() => setInnerText(diffTime()), 1000);

  return (
    <div className="flex flex-col gap-4">
      <Typo.MainTitle color="text-blue-700">{title}</Typo.MainTitle>
      <Typo.MainTitle color="text-blue-700">{subTitle}</Typo.MainTitle>
      <div className="flex gap-2">
        <div className="w-16">
          <Typo.SubTitle>{innerText.diffDay}</Typo.SubTitle>
        </div>
        <div className="w-16">
          <Typo.SubTitle>{innerText.diffHour}</Typo.SubTitle>
        </div>
        <div className="w-16">
          <Typo.SubTitle>{innerText.diffMin}</Typo.SubTitle>
        </div>
        <div className="w-16">
          <Typo.SubTitle>{innerText.diffSec}</Typo.SubTitle>
        </div>
      </div>
      {/* <Poll /> */}

      {/* <MemoInput /> */}
    </div>
  );
}
