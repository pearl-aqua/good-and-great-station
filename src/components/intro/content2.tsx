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
import BeatLoader from "react-spinners/BeatLoader";

export default function IntroContentTwo() {
  useAuth();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { applyNumber, cardSubmit, noApply } = userStore();

  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 mb-2">
      {applyNumber === null ? (
        <div className="w-full flex justify-center">
          <BeatLoader size={16} color="#a1a1aa" />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-2 mb-2">
          {!applyNumber && <ResultContainerTwo />}
          {(isSubmit || cardSubmit) && <ResultContainerTwo />}
          {applyNumber && !cardSubmit ? (
            <>
              <Typo.H1>{introTwo.title}</Typo.H1>
              <div className="mt-8 flex flex-col w-full">
                <Typo.H2>{introTwo.list[0].listTitle}</Typo.H2>
                <ul>
                  {introTwo.list[0].content.map((el) => (
                    <Typo.ListText key={el}>{el}</Typo.ListText>
                  ))}
                </ul>
              </div>
              <EmployeeContainer setIsSubmit={setIsSubmit} />
            </>
          ) : (
            <div className="mt-4 mb-4">
              <Button
                className="text-zinc-400"
                variant="link"
                onClick={() => router.push("/result")}
              >
                입사 지원 현황 보러가기
              </Button>
              {applyNumber && !noApply && (
                <Button
                  className="text-zinc-400"
                  variant="link"
                  onClick={() => router.push(`/my-lilfreaks/${applyNumber}`)}
                >
                  나의 정보 보기
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
