"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Typo from "@/components/typo/Typo";
import { introData } from "@/constants";
import userStore from "@/lib/store/user";
import Preview from "../apply/Preview";
import { useEffect } from "react";
import { getApplyInfo } from "@/firebase/apply";
import { getUserInfo } from "@/firebase/login";
import answerStore from "@/lib/store/answers";

export default function IntroContent() {
  const { userId, applyNumber, setUserId, setApplyNumber } = userStore();
  const { setInfo } = answerStore();

  const getUserData = async (id: string) => {
    const userInfoResult = await getUserInfo({
      id,
      email: "",
    });

    const { applyNumber } = userInfoResult;
    setApplyNumber(applyNumber);
    const applyInfoResult = await getApplyInfo({ applyNumber });

    setInfo(applyInfoResult);
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
        {!applyNumber ? (
          <Preview type="complete" />
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
