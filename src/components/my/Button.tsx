"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import { userLogout } from "@/firebase/login";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Typo from "@/components/typo/Typo";

export default function MyButton({
  url,
  userId,
}: {
  url: string;
  userId: string;
}) {
  const router = useRouter();
  const { localId } = useAuth();

  const clickShareButton = () => {
    const sendText = `[공유] Good ＆ Great 발매 기념 입사 지원서 공유의 건 

KEY의 미니앨범 Good ＆ Great 발매를 기념하여 Little ＆ Freaks 입사 지원서를 작성하였으니 확인 부탁드립니다.

아래 링크로 확인 가능하며 Good ＆ Great에 많은 관심과 사랑 부탁드립니다.
`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURI(
        sendText
      )}&url=${encodeURI(url)}`
    );
  };

  return (
    <>
      {localId === userId && (
        <Popover>
          <PopoverTrigger className="w-full mt-4">
            <div className="flex justify-center items-center w-full border border-zinc-200 p-2 rounded-xl">
              합격 여부 확인
            </div>
          </PopoverTrigger>

          <PopoverContent className="text-center text-zinc-500 pt-5">
            <div className="text-zinc-600">
              <Typo.H1>합격이세요~!!</Typo.H1>
            </div>

            <div className="flex flex-col gap-4 my-3">
              <Typo.DecsText>
                {`나혼산에서 기범이가 양식조리사
        필기 합격하고 말했던 톤으로 읽어주세요`}
              </Typo.DecsText>
              <Typo.DecsText>
                {`(저작권 문제가 있을 것 같아 사진이나
          영사은 가져오지 않았습니다만 다들 아시죠)`}
              </Typo.DecsText>
            </div>
          </PopoverContent>
        </Popover>
      )}
      <div className="flex items-center justify-center gap-2 mt-4 mb-6">
        <Button
          variant="link"
          className="m-0 text-zinc-400"
          onClick={() => router.push("/")}
        >
          {localId === userId ? "지원 공고로 가기" : "나도 지원하기"}
        </Button>
        {localId === userId && (
          <>
            <Button
              variant="link"
              className="text-zinc-400"
              onClick={clickShareButton}
            >
              공유하기
            </Button>
            <Button
              variant="link"
              className="text-zinc-400"
              onClick={userLogout}
            >
              로그아웃
            </Button>
          </>
        )}
      </div>
    </>
  );
}
