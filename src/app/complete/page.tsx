"use client";

import { useState } from "react";

import Complete from "@/components/complete/Complete";
import Result from "@/components/complete/Result";
import Typo from "@/components/typo/Typo";

export default function CompletePage() {
  const [step, setStep] = useState<number>(0);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Complete />
      <Typo.H2>지원 현황</Typo.H2>
      <Result />
      <Result />
      <Result />
    </div>
  );
}
