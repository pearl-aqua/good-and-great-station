"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import { userLogout } from "@/firebase/login";

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
    const sendText = `[공유] Good ＆ Great 발매 기념
Little ＆ Freaks 입사 지원서 공유의 건 

KEY의 미니앨범 Good ＆ Great 발매를 기념하여
Little ＆ Freaks 입사 지원서를 작성하였으니
확인 부탁드립니다.

아래 링크로 확인 가능하며 많은 관심 부탁드립니다.
`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURI(
        sendText
      )}&url=${encodeURI(url)}`
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <Button
        variant="link"
        className="m-0 text-zinc-400"
        onClick={() => router.push("/")}
      >
        {localId === userId ? "돌아가기" : "나도 지원하기"}
      </Button>
      {localId === userId && (
        <Button
          variant="link"
          className="text-zinc-400"
          onClick={clickShareButton}
        >
          공유하기
        </Button>
      )}
      <Button variant="link" className="text-zinc-400" onClick={userLogout}>
        로그아웃
      </Button>
    </div>
  );
}
