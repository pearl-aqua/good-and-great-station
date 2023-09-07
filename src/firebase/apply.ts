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

export interface ApplyDataType {
  name: string;
  year: string;
  motiveOption: string[];
  songs: string[];
  character: string;
  motiveText: string;
  myText: string;
}

interface Props {
  userId: string;
  applyData: ApplyDataType;
  applyNumber: string;
}

export const applyData = async ({ userId, applyData, applyNumber }: Props) => {
  const userRef = doc(store, "g_user", userId);
  const applyRef = doc(store, "g_apply", applyNumber);

  await updateDoc(userRef, { applyNumber });
  await setDoc(applyRef, applyData);
  await updateDoc(totalResultRef, {
    year: increment(1),
    haha: increment(1),
    songs: increment(applyData.songs.length),
    motive: increment(applyData.motiveOption.length),
  });
  await updateDoc(yearResultRef, {
    [applyData.year]: increment(1),
  });
  await updateDoc(hahaResultRef, {
    [applyData.character]: increment(1),
  });
  const updateMotiveData = {} as any;
  applyData.motiveOption.forEach((el: any) => {
    updateMotiveData[el] = increment(1);
  });
  await updateDoc(motiveResultRef, updateMotiveData);
  const updateSongData = {} as any;
  applyData.songs.forEach((el: any) => {
    updateSongData[el] = increment(1);
  });
  await updateDoc(songsResultRef, updateSongData);
};

export const getYearResult = async () => {
  const yearResult = await getDoc(yearResultRef);
  const yearData = yearResult.data();

  if (yearData) {
    const yearArr = Object.entries(yearData);
    yearArr.sort((a, b) => b[1] - a[1]);
    return yearArr;
  }
};

export const getMotiveResult = async () => {
  const motiveResult = await getDoc(motiveResultRef);
  const motiveData = motiveResult.data();

  if (motiveData) {
    const motiveArr = Object.entries(motiveData);
    motiveArr.sort((a, b) => b[1] - a[1]);
    return motiveArr;
  }
};

export const getSongsResult = async () => {
  const songsResult = await getDoc(songsResultRef);
  const songsData = songsResult.data();

  if (songsData) {
    const songsArr = Object.entries(songsData);
    songsArr.sort((a, b) => b[1] - a[1]);
    return songsArr;
  }
};

export const getHahaResult = async () => {
  const hahaResult = await getDoc(hahaResultRef);
  const hahaData = hahaResult.data();

  if (hahaData) {
    const hahaArr = Object.entries(hahaData);
    hahaArr.sort((a, b) => b[1] - a[1]);
    return hahaArr;
  }
};

export const getResult = async () => {
  const totalResult = await getDoc(totalResultRef);
  const yearResult = await getYearResult();
  const motiveResult = await getMotiveResult();
  const songsResult = await getSongsResult();
  const hahaResult = await getHahaResult();
  return {
    totalResult: totalResult.data(),
    yearResult,
    motiveResult,
    songsResult,
    hahaResult,
  };
};

export const getApplyInfo = async ({
  applyNumber,
}: {
  applyNumber: string;
}) => {
  const applyRef = doc(store, "g_apply", applyNumber);
  const applyInfoResult = await getDoc(applyRef);
  return applyInfoResult.data() as any;
};
