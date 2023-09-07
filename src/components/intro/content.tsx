"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Typo from "@/components/typo/Typo";
import { introData } from "@/constants";
import userStore from "@/lib/store/user";
import { useEffect } from "react";
import { getUserInfo } from "@/firebase/login";

export default function IntroContent() {
  const { userId, applyNumber, setUserId, setApplyNumber } = userStore();

  const getUserData = async (id: string) => {
    const userInfoResult = await getUserInfo({
      id,
      email: "",
    });

    const { applyNumber } = userInfoResult;
    setApplyNumber(applyNumber);
  };

  useEffect(() => {
    const userId = localStorage.getItem("gas_id");
    if (userId) {
      setUserId(userId);
      getUserData(userId);
    }
  }, []);

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
      <Typo.H1>{introData.title}</Typo.H1>
      {introData.list.map(({ listTitle, content }) => (
        <div key={listTitle} className="mb-1">
          <Typo.H2>{listTitle}</Typo.H2>
          <ul>
            {content.map((el) => (
              <Typo.ListText key={el}>{el}</Typo.ListText>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex gap-2">
        {applyNumber ? (
          <Button
            variant="outline"
            className="w-1/2"
            onClick={() => router.push(`/my-lilfreaks/${applyNumber}`)}
          >
            나의 지원서 보러가기
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-1/2"
            onClick={handleButtonClick}
          >
            입사 지원 하기
          </Button>
        )}
        <Button
          variant="outline"
          className="w-1/2"
          onClick={() => router.push("/result")}
        >
          지원 현황 확인하기
        </Button>
      </div>
    </div>
  );
}
