"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Typo from "@/components/typo/Typo";
import { introTwo } from "@/constants/intro";
import userStore from "@/lib/store/user";
import useAuth from "@/hooks/useAuth";

export default function IntroContentTwo() {
  const { userId, applyNumber } = userStore();

  useAuth();
  const router = useRouter();

  const handleButtonClick = () => {
    if (userId) {
      router.push("/apply");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Typo.H1>{introTwo.title}</Typo.H1>
      {introTwo.list.map(({ listTitle, content }) => (
        <div key={listTitle} className="mb-1">
          <Typo.H2>{listTitle}</Typo.H2>
          <ul>
            {content.map((el) => (
              <Typo.ListText key={el}>{el}</Typo.ListText>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex gap-2 mb-2">
        {applyNumber ? (
          <Button
            variant="outline"
            className="w-1/2"
            onClick={() => router.push(`/employee-card/${applyNumber}`)}
          >
            입사 카드 작성하기
          </Button>
        ) : (
          <>
            <Button
              variant="outline"
              className="w-1/2"
              onClick={handleButtonClick}
            >
              입사 지원 후 입사 카드 작성
            </Button>
            <Button
              variant="outline"
              className="w-1/2"
              onClick={handleButtonClick}
            >
              입사 지원 없이 게스트 카드 작성
            </Button>
          </>
        )}
      </div>
      <Button
        variant="outline"
        className="w-1/2"
        onClick={() => router.push("/result")}
      >
        카드 작성 현황 확인하기
      </Button>
      <Button
        variant="outline"
        className="w-1/2"
        onClick={() => router.push("/result")}
      >
        입사 지원 현황 확인하기
      </Button>
    </div>
  );
}
