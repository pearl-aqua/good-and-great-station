import {
  setDocument,
  sortArr,
  updateDocument,
  updateFieldCount,
} from "./commons";
import { doc, getDoc } from "firebase/firestore";
import { store } from "./index";

export const createQuestion = async ({
  docName,
  text,
  subText,
  options,
}: {
  docName: string;
  text: string;
  subText?: string;
  options: { optionId: string; optionText: string }[];
}) => {
  const questionData = {
    text,
    subText,
  };
  setDocument({
    collectionName: "g_question",
    docName: docName,
    data: questionData,
  });

  const optionData = options.reduce(
    (acc: Record<string, string>, { optionId, optionText }) => {
      acc[optionId] = optionText;
      return acc;
    },
    {}
  );

  setDocument({
    collectionName: "n_option",
    docName: docName,
    data: optionData,
  });

  const optionCountData = options.reduce(
    (acc: Record<string, number>, { optionId }) => {
      acc[optionId] = 0;
      return acc;
    },
    {}
  );

  setDocument({
    collectionName: "g_result",
    docName: docName,
    data: optionCountData,
  });

  setDocument({
    collectionName: "g_total",
    docName: docName,
    data: { total: 0 },
  });
};

export const getQuestion = async ({ questionId }: { questionId: string }) => {
  const questionData = await getDoc(doc(store, "g_question", questionId));
  const optionData = await getDoc(doc(store, "n_option", questionId));
  const question = questionData.data();
  const optionList = optionData.data();

  if (optionList) {
    return {
      ...question,
      options: Object.keys(optionList).map((el) => ({
        value: el,
        label: optionList[el],
      })),
    };
  }
};

export const saveAnswer = async ({
  questionId,
  optionId,
  userId,
}: {
  questionId: string;
  optionId: string;
  userId: string;
}) => {
  updateFieldCount({
    collectionName: "g_result",
    docName: questionId,
    fieldName: optionId,
  });
  updateFieldCount({
    collectionName: "g_total",
    docName: questionId,
    fieldName: "total",
  });
  updateDocument({
    collectionName: "g_user",
    docName: userId,
    data: { [questionId]: optionId },
  });
};

export const getResult = async ({ questionId }: { questionId: string }) => {
  const questionData = await getDoc(doc(store, "g_question", questionId));
  const optionData = await getDoc(doc(store, "n_option", questionId));
  const resultData = await getDoc(doc(store, "g_result", questionId));
  const totalData = await getDoc(doc(store, "g_total", questionId));
  const question = questionData.data();
  const optionList = optionData.data();
  const resultList = resultData.data();
  const totalCount = totalData.data();

  if (optionList && resultList && question) {
    const valueCountOptions = Object.keys(optionList).map((el) => ({
      value: el,
      count: resultList[el],
      label: optionList[el],
    }));
    valueCountOptions?.sort((a, b) => {
      return (b.count || 0) - (a.count || 0);
    });

    return {
      data: { title: question.text, list: valueCountOptions },
      total: totalCount?.total,
    };
  }
};

export const getUserQuestion = async ({
  userId,
  questionId,
}: {
  userId: string;
  questionId: string;
}) => {
  const userData = await getDoc(doc(store, "g_user", userId));

  const userResult = userData.data();

  if (userResult && userResult[questionId]) {
    return userResult[questionId];
  }
};
