"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Typo from "@/components/typo/Typo";
import { introTwo } from "@/constants/intro";
import userStore from "@/lib/store/user";
import useAuth from "@/hooks/useAuth";
import EmployeeContainer from "@/components/employee/CreateContainer";
import ResultContainerTwo from "../complete/ResultContainerTwo";

export default function IntroContentTwo() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { applyNumber, cardSubmit } = userStore();

  useAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <Typo.H1>{introTwo.title}</Typo.H1>
      <div className="mb-1">
        <Typo.H2>{introTwo.list[0].listTitle}</Typo.H2>
        <ul>
          {introTwo.list[0].content.map((el) => (
            <Typo.ListText key={el}>{el}</Typo.ListText>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center w-full gap-2 mb-2">
        {isSubmit || cardSubmit ? (
          <ResultContainerTwo />
        ) : (
          <EmployeeContainer
            applyNumber={applyNumber}
            setIsSubmit={setIsSubmit}
          />
        )}
        <div>
          <Button
            className="text-zinc-400"
            variant="link"
            onClick={() => router.push("/result")}
          >
            입사 지원 현황 보러가기
          </Button>
          <Button
            className="text-zinc-400"
            variant="link"
            onClick={() => router.push(`/my-lilfreaks/${applyNumber}`)}
          >
            나의 정보 보기
          </Button>
        </div>
      </div>
      {/* <div className="mb-1">
        <Typo.H2>{introTwo.list[1].listTitle}</Typo.H2>
        <ul>
          {introTwo.list[1].content.map((el) => (
            <Typo.ListText key={el}>{el}</Typo.ListText>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
