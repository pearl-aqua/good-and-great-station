"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function MyButton({
  url,
  userId,
}: {
  url: string;
  userId: string;
}) {
  const router = useRouter();

  const currentUserId = localStorage.getItem("gas_id");

  const clickShareButton = () => {
    const sendText = `[공유] Good ＆ Great 발매 기념

Little ＆ Freaks 입사 지원서 공유의 건 
상기 링크로 확인 부탁드리며 많은 관심 부탁드립니다.->
`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURI(
        sendText
      )}&url=${encodeURI(url)}`
    );
  };

  return (
    <div className="flex items-center justify-center gap-2 my-6">
      <Button
        variant="outline"
        className="m-0"
        onClick={() => router.push("/")}
      >
        {currentUserId === userId ? "돌아가기" : "나도 지원하기"}
      </Button>
      {currentUserId === userId && (
        <Button variant="outline" onClick={clickShareButton}>
          공유하기
        </Button>
      )}
    </div>
  );
}
