"use client";

import { useState } from "react";
import Step0 from "@/components/goodAndGreat/apply/Step0";
import Step1 from "@/components/goodAndGreat/apply/Step1";
import Step2 from "@/components/goodAndGreat/apply/Step2";
import Step3 from "@/components/goodAndGreat/apply/Step3";

export default function ApplyContainer() {
  const [step, setStep] = useState<number>(0);
  return (
    <>
      {step === 0 && <Step0 setStep={setStep} />}
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
    </>
  );
}
