import { doc, setDoc, updateDoc, getDoc, increment } from "firebase/firestore";
import { store } from "./index";

interface UpdateDocumentProps {
  collectionName: string;
  docName: string;
  data: Record<any, any>;
}

interface UpdateFieldCountProp {
  collectionName: string;
  docName: string;
  fieldName: string;
  fieldNames?: string[];
  count?: number;
}

// util로 옮겨라
export const sortArr = (data: any) => {
  const keysArr = Object.keys(data);
  keysArr.sort((a, b) => data[b] - data[a]);

  const dataArr = keysArr.map((el) => ({
    label: el,
    value: data[el],
  }));
  return dataArr;
};

export const setDocument = async ({
  collectionName,
  docName,
  data,
}: UpdateDocumentProps) => {
  await setDoc(doc(store, collectionName, docName), data);
};

export const updateDocument = async ({
  collectionName,
  docName,
  data,
}: UpdateDocumentProps) => {
  await updateDoc(doc(store, collectionName, docName), data);
};

export const updateFieldCount = async ({
  collectionName,
  docName,
  fieldName,
  count,
}: UpdateFieldCountProp) => {
  const resultRef = doc(store, collectionName, docName);

  await updateDoc(resultRef, {
    [fieldName]: increment(count ?? 1),
  });
};

export const updateMultiFieldCount = async ({
  collectionName,
  docName,
  fieldNames,
  count,
}: {
  collectionName: string;
  docName: string;
  fieldNames: string[];
  count?: number;
}) => {
  const resultRef = doc(store, collectionName, docName);

  const updateData: any = {};

  fieldNames.forEach((fieldName) => {
    updateData[fieldName] = increment(1);
  });

  await updateDoc(resultRef, updateData);
};

// interface UpdateCountProp {
//   updateField: string[];
//   updateMultiField: { name: string; count: number }[];
// }

// export const updateTotalCount = async ({
//   updateField,
//   updateMultiField,
// }: UpdateCountProp) => {
//   const updateData: any = {};

//   updateField.forEach((fieldName) => {
//     updateData[fieldName] = increment(1);
//   });

//   updateMultiField.forEach(({ name, count }) => {
//     updateData[name] = increment(count);
//   });

//   await updateDoc(totalResultRef, updateData);
// };

// export const getResult = async (resultName: string) => {
//   const resultRef = doc(store, "g_apply_result", resultName);
//   const resultData = await getDoc(resultRef);
//   const dataList = resultData.data();

//   if (dataList) {
//     return sortArr(dataList);
//   }
// };
