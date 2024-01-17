"use client";

import { useState } from "react";
import Typo from "../typo/Typo";

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

export default function Timer() {
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

  setInterval(() => setInnerText(diffTime()), 1000);

  return (
    <div className="flex gap-2 h-20">
      <div className="w-16 flex justify-center">
        <Typo.SubTitle>{innerText.diffDay}</Typo.SubTitle>
      </div>
      <div className="w-16 flex justify-start">
        <Typo.SubTitle>{innerText.diffHour}</Typo.SubTitle>
      </div>
      <div className="w-16 flex justify-center">
        <Typo.SubTitle>{innerText.diffMin}</Typo.SubTitle>
      </div>
      <div className="w-16 flex justify-center">
        <Typo.SubTitle>{innerText.diffSec}</Typo.SubTitle>
      </div>
    </div>
  );
}
