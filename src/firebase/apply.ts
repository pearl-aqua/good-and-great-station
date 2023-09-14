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

const ageResultRef = doc(store, "g_apply_result", "age");
const newSongsResultRef = doc(store, "g_apply_result", "newSongs");
const mbtiResultRef = doc(store, "g_apply_result", "mbti");

export interface ApplyDataType {
  name: string;
  year: string;
  motiveOption: string[];
  songs: string[];
  character: string;
  motiveText: string;
  myText: string;
  userId?: string;
}

export interface EmployeeDataType {
  age?: string;
  newSongs: string[];
  mbti?: string[];
}

interface Props {
  userId: string;
  applyData: ApplyDataType;
  applyNumber: string;
}

const sortArr = (data: any) => {
  const keysArr = Object.keys(data);
  keysArr.sort((a, b) => data[b] - data[a]);

  const dataArr = keysArr.map((el) => ({
    label: el,
    value: data[el],
  }));
  return dataArr;
};

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
    total: increment(1),
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
    const yearArr = sortArr(yearData);
    return yearArr;
  }
};

export const getMotiveResult = async () => {
  const motiveResult = await getDoc(motiveResultRef);
  const motiveData = motiveResult.data();

  if (motiveData) {
    const motiveArr = sortArr(motiveData);
    return motiveArr;
  }
};

export const getSongsResult = async () => {
  const songsResult = await getDoc(songsResultRef);
  const songsData = songsResult.data();

  if (songsData) {
    const songsArr = sortArr(songsData);
    return songsArr;
  }
};

export const getHahaResult = async () => {
  const hahaResult = await getDoc(hahaResultRef);
  const hahaData = hahaResult.data();

  if (hahaData) {
    const sortHaha = sortArr(hahaData);
    return sortHaha;
  }
};

export const getAgeResult = async () => {
  const ageResult = await getDoc(ageResultRef);
  const ageData = ageResult.data();

  if (ageData) {
    const sortAge = sortArr(ageData);
    return sortAge;
  }
};

export const getNewSongsResult = async () => {
  const newSongsResult = await getDoc(newSongsResultRef);
  const newSongsData = newSongsResult.data();

  if (newSongsData) {
    const newSongsArr = sortArr(newSongsData);
    return newSongsArr;
  }
};

export const getMbtiResult = async () => {
  const mbtiResult = await getDoc(mbtiResultRef);
  const mbtiData = mbtiResult.data();

  if (mbtiData) {
    return mbtiData;
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

export const getResultTwo = async () => {
  const totalResult = await getDoc(totalResultRef);
  const ageResult = await getAgeResult();
  const newSongsResult = await getNewSongsResult();
  const mbtiResult = await getMbtiResult();

  return {
    totalResult: totalResult.data(),
    ageResult,
    newSongsResult,
    mbtiResult,
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

export const updateEmployeeData = async ({
  userId,
  employeeData,
  applyNumber,
}: {
  userId: string;
  employeeData: EmployeeDataType;
  applyNumber: string;
}) => {
  const userRef = doc(store, "g_user", userId);

  await updateDoc(userRef, { cardSubmit: true });

  const applyInfo = await getApplyInfo({ applyNumber });
  const applyRef = doc(store, "g_apply", applyNumber);

  await setDoc(applyRef, { ...applyInfo, ...employeeData });

  await updateDoc(totalResultRef, {
    age: increment(1),
    newSongs: increment(employeeData.newSongs.length),
    mbti: increment(1),
    newTotal: increment(1),
  });

  if (employeeData.age) {
    await updateDoc(ageResultRef, {
      [employeeData.age]: increment(1),
    });
  }

  const updateNewSongsData = {} as any;
  employeeData.newSongs.forEach((el: any) => {
    updateNewSongsData[el] = increment(1);
  });
  await updateDoc(newSongsResultRef, updateNewSongsData);

  if (employeeData.mbti) {
    const updateMbtiData = {} as any;
    employeeData.mbti.forEach((el: any) => {
      updateMbtiData[el] = increment(1);
    });
    await updateDoc(mbtiResultRef, updateMbtiData);
  }
};
