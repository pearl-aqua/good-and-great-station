import { doc, setDoc } from "firebase/firestore";
import { store } from "./index";

export const updateMemo = async ({ userId, email, text }: any) => {
  const data = {
    email: email || "",
    userId: userId || "",
    date: new Date(),
    text,
  };

  const docId = Date.now();

  await setDoc(doc(store, "g_memo", docId.toString()), data);
};
