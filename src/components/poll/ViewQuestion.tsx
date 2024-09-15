import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { getQuestion, saveAnswer, saveAnswers } from "@/firebase/question";
import userStore from "@/lib/store/user";
import SingleQuestion from "../question/SingleQuestion";
import MultiQuestion from "../question/MultiQuestion";
import Typo from "../typo/Typo";

const multiQuestion = ["90005", "90006"];

const options = {
  "90005": 6,
  "90006": 2,
};

export default function ViewQuestion({
  setIsSubmit,
  questionId,
}: {
  setIsSubmit: (submitId: string[]) => void;
  questionId: string;
}) {
  const { userId } = userStore();
  const router = useRouter();
  const [result, setResult] = useState<any>(null);

  const getList = async () => {
    const resultData = await getQuestion({ questionId });
    setResult(resultData);
  };

  useEffect(() => {
    getList();
  }, []);

  const saveSingleQuestion = async (answer: string) => {
    if (userId) {
      saveAnswer({
        questionId,
        optionId: answer,
        userId,
      });

      setIsSubmit([answer]);
    } else {
      const isConfirm = confirm(
        "투표를 위해 로그인이 필요합니다. 로그인 페이지로 이동합니다."
      );
      if (isConfirm) {
        router.push("/login");
      }
    }
  };

  const saveMultiQuestion = async (answers: string[]) => {
    if (userId) {
      saveAnswers({
        questionId,
        optionsId: answers,
        userId,
      });

      setIsSubmit(answers);
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
        <Typo.BodyText color="text-zinc-700 font-bold">
          {result?.text}
        </Typo.BodyText>
      </CardHeader>
      {result && !multiQuestion.includes(questionId) && (
        <SingleQuestion result={result} saveQuestion={saveSingleQuestion} />
      )}
      {result && multiQuestion.includes(questionId) && (
        <MultiQuestion
          result={result}
          saveQuestion={saveMultiQuestion}
          selectNum={options[questionId]}
        />
      )}

      {!result && (
        <CardContent className="flex flex-col gap-4">
          <div className="w-full h-[100px] flex justify-center items-center">
            <BeatLoader size={12} color="#bfdbfe" />
          </div>
        </CardContent>
      )}
    </Card>
  );
}
