"use client";

import { useState } from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Props {
  result: any;
  saveQuestion: any;
}

export default function SingleQuestion({ result, saveQuestion }: Props) {
  const [answer, setAnswer] = useState<string>("");

  return (
    <>
      <CardContent className="flex flex-col gap-4">
        {result && (
          <RadioGroup
            onValueChange={setAnswer}
            defaultValue={answer}
            className="gap-3"
          >
            {result.options?.map(
              ({ label, value }: { label: string; value: string }) => (
                <div
                  key={value}
                  className="flex gap-1.5 leading-none text-zinc-600"
                >
                  <RadioGroupItem
                    id={value}
                    value={value}
                    className="border-zinc-400"
                  />
                  <Label htmlFor={value}>{label}</Label>
                </div>
              )
            )}
          </RadioGroup>
        )}
      </CardContent>
      <CardFooter className="justify-end">
        {result && (
          <Button
            className="border-zinc-500 hover:bg-zinc-50 text-zinc-700 hover:text-zinc-700 disabled:text-gray-400 disabled:border-gray-400"
            variant="outline"
            disabled={!answer}
            onClick={() => saveQuestion(answer)}
          >
            제출
          </Button>
        )}
      </CardFooter>
    </>
  );
}
