import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { getQuestion, saveAnswer, saveAnswers } from "@/firebase/question";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BeatLoader from "react-spinners/BeatLoader";
import userStore from "@/lib/store/user";
import { useRouter } from "next/navigation";
import SelectButton from "../goodAndGreat/custom/SelectButton";

export default function ViewQuestion({
  setIsSubmit,
  questionId,
}: {
  setIsSubmit: (submitId: string) => void;
  questionId: string;
}) {
  const { userId } = userStore();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [answer, setAnswer] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([]);

  const getList = async () => {
    const resultData = await getQuestion({ questionId });
    setResult(resultData);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleClickSong = (value: string) => {
    if (answers.includes(value)) {
      const newOptions = answers.filter((el) => el !== value);
      setAnswers(newOptions);
    } else if (answers.length < 6) {
      setAnswers([...answers, value]);
    } else {
      alert("6개까지 선택 가능합니다.");
    }
  };

  const saveQuestion = async () => {
    if (userId) {
      if (questionId !== "60006") {
        saveAnswer({
          questionId,
          optionId: answer,
          userId,
        });
      } else if (questionId === "60006") {
        saveAnswers({
          questionId,
          optionsId: answers,
          userId,
        });
      }

      setIsSubmit("true");
    } else {
      const isConfirm = confirm(
        "투표를 위해 로그인이 필요합니다. 로그인 페이지로 이동합니다."
      );
      if (isConfirm) {
        router.push("/login");
      }
    }
  };

  return (
    <Card className="w-[320px]">
      <CardHeader className="flex flex-row w-full items-center justify-between pt-8">
        <CardDescription className="text-blue-700">
          {result?.text}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {result && questionId !== "60006" && (
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
        {result && questionId === "60006" && (
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

        {!result && (
          <div className="w-full h-[100px] flex justify-center items-center">
            <BeatLoader size={12} color="#bfdbfe" />
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-end">
        {result && (
          <Button
            className="border-blue-500 hover:bg-blue-50 text-blue-700 hover:text-blue-700 disabled:text-gray-400 disabled:border-gray-400"
            variant="outline"
            disabled={
              (questionId !== "60006" && !answer) ||
              (questionId === "60006" && answers.length === 0)
            }
            onClick={saveQuestion}
          >
            제출
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
