import {
  doc,
  collection,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { store } from "./index";
const yearResultRef = doc(store, "g_apply_result", "year");
const motiveResultRef = doc(store, "g_apply_result", "motive");
const songsResultRef = doc(store, "g_apply_result", "songs");
const hahaResultRef = doc(store, "g_apply_result", "haha");
const totalResultRef = doc(store, "g_apply_result", "total");

export const applyData = async ({ userId, applyData, applyNumber }) => {
  const userRef = doc(store, "g_user", userId);
  const applyRef = doc(store, "g_apply", applyNumber);

  await updateDoc(userRef, { applyNumber });
  await setDoc(applyRef, applyData);
  await updateDoc(totalResultRef, {
    count: increment(1),
  });
  await updateDoc(yearResultRef, {
    [applyData.year]: increment(1),
  });
  await updateDoc(hahaResultRef, {
    [applyData.character]: increment(1),
  });
  const updateMotiveData = {};
  applyData.motiveOption.forEach((el) => {
    updateMotiveData[el] = increment(1);
  });
  await updateDoc(motiveResultRef, updateMotiveData);
  const updateSongData = {};
  applyData.songs.forEach((el) => {
    updateSongData[el] = increment(1);
  });
  await updateDoc(songsResultRef, updateSongData);
};

export const getYearResult = async () => {
  const yearResult = await getDoc(yearResultRef);
  console.log(yearResult.data(), "yae");
};
