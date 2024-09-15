"use client";

import { useState } from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SelectButton from "./SelectButton";

interface Props {
  result: any;
  saveQuestion: any;
  selectNum: number;
}

export default function MultiQuestion({
  result,
  saveQuestion,
  selectNum,
}: Props) {
  const [answers, setAnswers] = useState<string[]>([]);

  const handleClickSong = (value: string) => {
    if (answers.includes(value)) {
      const newOptions = answers.filter((el) => el !== value);
      setAnswers(newOptions);
    } else if (answers.length < selectNum) {
      setAnswers([...answers, value]);
    } else {
      alert(`${selectNum}개까지 선택 가능합니다.`);
    }
  };

  return (
    <>
      <CardContent className="flex flex-col gap-4">
        {result && (
          <div className="flex flex-wrap gap-1.5">
            {result.options?.map(
              ({ label, value }: { label: string; value: string }) => (
                <SelectButton
                  key={value}
                  onClick={() => handleClickSong(value)}
                  isSelected={answers.includes(value)}
                >
                  {label}
                </SelectButton>
              )
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-end">
        {result && (
          <Button
            className="border-zinc-500 hover:bg-zinc-50 text-zinc-700 hover:text-zinc-700 disabled:text-gray-400 disabled:border-gray-400"
            variant="outline"
            disabled={answers.length === 0}
            onClick={() => saveQuestion(answers)}
          >
            제출
          </Button>
        )}
      </CardFooter>
    </>
  );
}
