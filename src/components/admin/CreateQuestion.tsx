"use client";

import { CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createQuestion } from "@/firebase/question";
import { songsData } from "@/constants/index";
import { Checkbox } from "@/components/ui/checkbox";

export default function CreateQuestion() {
  const [text, setText] = useState<string>("");
  const [subText, setSubText] = useState<string>("");
  const [questionId, setQuestionId] = useState<string>();
  const [albumOption, setAlbumOption] = useState<boolean>(false);

  const albums = songsData.map(({ label, value }) => ({
    optionId: value,
    optionText: label,
  }));

  const fourArray = Array(2).fill({ optionId: "", optionText: "" });

  const [options, setOptions] =
    useState<{ optionId: string; optionText: string }[]>(fourArray);

  const router = useRouter();

  const saveQuestion = async () => {
    if (text && questionId && options) {
      await createQuestion({
        docName: questionId,
        text,
        subText,
        options: albumOption ? albums : options,
      });
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <>
      <CardContent className="flex flex-col max-w-sm gap-1">
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={questionId}
          onChange={(e) => setQuestionId(e.target.value)}
        />
        <Input
          type="text"
          placeholder="문제를 입력해주세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type="text"
          placeholder="서브 텍스트를 입력해주세요"
          value={subText}
          onChange={(e) => setSubText(e.target.value)}
        />
      </CardContent>
      <CardContent>
        <Checkbox
          checked={albumOption}
          onCheckedChange={() => setAlbumOption(!albumOption)}
        />{" "}
        albums
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        {options.map(({ optionId, optionText }, inx) => {
          const setOptionId = (value: string) => {
            const newOptionId = options.map(
              ({ optionId, optionText }, indx) => {
                if (indx === inx) {
                  return { optionId: value, optionText };
                }
                return { optionId, optionText };
              }
            );
            setOptions(newOptionId);
          };
          const setOptionText = (value: string) => {
            const newOptionText = options.map(
              ({ optionId, optionText }, indx) => {
                if (indx === inx) {
                  return { optionId, optionText: value };
                }
                return { optionId, optionText };
              }
            );
            setOptions(newOptionText);
          };
          return (
            <div key={inx}>
              <Input
                type="text"
                placeholder="옵션Id를 입력해주세요"
                value={optionId}
                onChange={(e) => setOptionId(e.target.value)}
              />
              <Input
                type="text"
                placeholder="옵션 텍스트를 입력해주세요"
                value={optionText}
                onChange={(e) => setOptionText(e.target.value)}
              />
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={saveQuestion}>
          저장
        </Button>
        <Button variant="outline" onClick={handleCancel}>
          취소
        </Button>
      </CardFooter>
    </>
  );
}
