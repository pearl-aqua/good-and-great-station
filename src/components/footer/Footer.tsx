"use client";

import { Button } from "../ui/button";

export default function Footer() {
  const onClick = () => {
    alert("준비 중입니다");
  };
  return (
    <div className="fixed bottom-0 w-full h-10 flex justify-center items-center bg-zinc-800 border-box">
      <Button
        variant="link"
        className="text-zinc-200 font-light"
        onClick={onClick}
      >
        About
      </Button>
      <Button
        variant="link"
        className="text-zinc-200 font-light"
        onClick={onClick}
      >
        Bug report
      </Button>
    </div>
  );
}
