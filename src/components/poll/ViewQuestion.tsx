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
import { getQuestion, saveAnswer } from "@/firebase/question";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BeatLoader from "react-spinners/BeatLoader";
import userStore from "@/lib/store/user";
import { useRouter } from "next/navigation";

const fourArray = Array(4).fill({ optionId: "", optionText: "" });

export default function ViewQuestion({
  setIsSubmit,
}: {
  setIsSubmit: (submit: boolean) => void;
}) {
  const { userId } = userStore();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);
  const [answer, setAnswer] = useState<string>("");

  const getList = async () => {
    const resultData = await getQuestion({ questionId: "6001" });
    setResult(resultData);
  };

  useEffect(() => {
    getList();
  }, []);

  const saveQuestion = async () => {
    if (userId) {
      saveAnswer({
        questionId: "6001",
        optionId: answer,
        userId,
      });
      setIsSubmit(true);
    } else {
      router.push("/login");
    }
  };

  return (
    <Card className="w-[320px]">
      <CardHeader className="flex flex-row w-full items-center justify-between">
        <CardDescription>{result?.text}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RadioGroup
          onValueChange={setAnswer}
          defaultValue={answer}
          className="gap-3"
        >
          {result ? (
            result.options?.map(
              ({ label, value }: { label: string; value: string }) => (
                <div
                  key={value}
                  className="flex gap-1.5 leading-none text-blue-900"
                >
                  <RadioGroupItem
                    id={value}
                    value={value}
                    className="border-blue-800"
                  />
                  <Label htmlFor={value}>{label}</Label>
                </div>
              )
            )
          ) : (
            <div className="w-full h-[100px] flex justify-center items-center">
              <BeatLoader size={12} color="#a1a1aa" />
            </div>
          )}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          className="border-blue-700 hover:bg-blue-50 text-blue-700 hover:text-blue-700 disabled:text-gray-400 disabled:border-gray-400"
          variant="outline"
          disabled={!answer}
          onClick={saveQuestion}
        >
          제출
        </Button>
      </CardFooter>
    </Card>
  );
}
