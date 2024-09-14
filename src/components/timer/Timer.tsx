"use client";

import { useState } from "react";
import Typo from "../typo/Typo";

// const onAndOnInSeoulDate = new Date(2024, 0, 27, 18);
const onAndOnSharpDate = new Date(2024, 8, 14, 18);
const pleasureShopDate = new Date(2024, 8, 23, 18);

const diffTime = () => {
  const nowDay = new Date();
  const keyDay = pleasureShopDate;

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
    <div className="flex gap-2">
      <div className="w-8 flex justify-center">
        <Typo.H2>{innerText.diffDay ? innerText.diffDay : "*"}</Typo.H2>
      </div>
      <div className="w-8 flex justify-center">
        <Typo.H2>{innerText.diffHour ? innerText.diffHour : "*"}</Typo.H2>
      </div>
      <div className="w-8 flex justify-center">
        <Typo.H2>{innerText.diffMin ? innerText.diffMin : "*"}</Typo.H2>
      </div>
      <div className="w-8 flex justify-center">
        <Typo.H2>{innerText.diffSec ? innerText.diffSec : "*"}</Typo.H2>
      </div>
    </div>
  );
}
