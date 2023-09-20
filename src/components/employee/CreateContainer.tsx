"use client";

import {
  ageData,
  album2_1,
  mbti_e,
  mbti_j,
  mbti_n,
  mbti_t,
  titleData,
  englishData,
  album_package,
} from "@/constants/index";
import { findLabel } from "@/lib/convert";
import { Label } from "@/components/ui/label";
import Typo from "../typo/Typo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SelectButton from "../custom/SelectButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import employeeStore from "@/lib/store/employee";
import AlertModal from "../alert/AlertModal";
import userStore from "@/lib/store/user";
import { getApplyInfo, updateEmployeeData } from "@/firebase/apply";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function EmployeeCreateContainer({ setIsSubmit }: any) {
  const [userName, setUserName] = useState<string>("");

  const confirmText = "제출 하시겠습니까? 제출 이후에는 수정이 불가능합니다.";
  const {
    userId,
    applyNumber,
    cardSubmit,
    setCardSubmit,
    setApplyNumber,
    setNoApply,
    name,
  } = userStore();

  // const getData = async () => {
  //   if (applyNumber && !cardSubmit) {
  //     const result = await getApplyInfo({ applyNumber });
  //     if (result?.name) {
  //       setUserName(result?.name);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [applyNumber]);

  const router = useRouter();

  const {
    age,
    setAge,
    newSongs,
    setNewSongs,
    eOption,
    nOption,
    tOption,
    jOption,
    setEOption,
    setNOption,
    setTOption,
    setJOption,
    title,
    setTitle,
    english,
    setEnglish,
    albumPackage,
    setAlbumPackage,
  } = employeeStore();

  const handleClickSong = (value: string, label: string) => {
    if (newSongs.includes(value)) {
      const newOptions = newSongs.filter((el) => el !== value);
      setNewSongs(newOptions);
    } else if (newSongs.length < 2) {
      setNewSongs([...newSongs, value]);
    }
  };

  const handleSubmit = async () => {
    if (newSongs.length < 1) {
      alert("Good & Great에서 좋아하는 노래를 선택해주세요.");
      return;
    }

    const mbtiResult = [eOption, nOption, tOption, jOption].filter((el) => el);

    if (mbtiResult.length !== 4 && mbtiResult.length !== 0) {
      alert("mbti항목을 완성해 주세요.");
      return;
    }

    if (userId && applyNumber) {
      await updateEmployeeData({
        userId,
        applyNumber,
        employeeData: {
          age,
          newSongs,
          title,
          english,
          albumPackage,
          mbti:
            mbtiResult.length !== 0 ? [eOption, nOption, tOption, jOption] : [],
        },
      });
      setCardSubmit(true);
    } else if (userId && !applyNumber) {
      await updateEmployeeData({
        userId,
        applyNumber: Date.now().toString(),
        employeeData: {
          age,
          newSongs,
          title,
          english,
          albumPackage,
          mbti:
            mbtiResult.length !== 0 ? [eOption, nOption, tOption, jOption] : [],
        },
        noApply: true,
      });
      setCardSubmit(true);
      setApplyNumber(Date.now().toString());
      setNoApply(true);
      router.push("/");
    }
  };
  return (
    <Card>
      <CardHeader>
        {applyNumber && <CardTitle>Little&Freaks 직원 카드</CardTitle>}
        {!applyNumber && (
          <CardDescription>아래 내용을 작성해주세요.</CardDescription>
        )}
      </CardHeader>

      <CardContent className="">
        <Label className="text-zinc-400">
          Good & Great에서 좋아하는 노래를 선택해주세요.(2곡까지 선택 가능)
        </Label>
        <div className="flex flex-wrap gap-2 py-4 border-b">
          {album2_1.map(({ label, value }) => (
            <SelectButton
              key={value}
              onClick={() => handleClickSong(value, label)}
              isSelected={newSongs.includes(value)}
            >
              {label}
            </SelectButton>
          ))}
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-4">
        <Label className=" text-zinc-400">
          가장 좋아하는 타이틀곡은? (선택사항)
        </Label>
        <div className="pb-4 border-b">
          <RadioGroup onValueChange={setTitle} defaultValue={title}>
            {titleData.map(({ label, value }) => (
              <div
                key={value}
                className="flex gap-1.5 leading-none text-zinc-600"
              >
                <RadioGroupItem id={value} value={value} />
                <Label htmlFor={value}>{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-4">
        <Label className=" text-zinc-400">
          가장 좋아하는 영어곡은? (선택사항)
        </Label>
        <div className="pb-4 border-b">
          <RadioGroup onValueChange={setEnglish} defaultValue={english}>
            {englishData.map(({ label, value }) => (
              <div
                key={value}
                className="flex gap-1.5 leading-none text-zinc-600"
              >
                <RadioGroupItem id={value} value={value} />
                <Label htmlFor={value}>{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-4">
        <Label className=" text-zinc-400">
          가장 마음에 들었던 앨범 패키지는? (선택사항)
        </Label>
        <div className="pb-4 border-b">
          <RadioGroup
            onValueChange={setAlbumPackage}
            defaultValue={albumPackage}
          >
            {album_package.map(({ label, value }) => (
              <div
                key={value}
                className="flex gap-1.5 leading-none text-zinc-600"
              >
                <RadioGroupItem id={value} value={value} />
                <Label htmlFor={value}>{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardContent className="">
        <Label className=" text-zinc-400">MBTI (선택사항)</Label>
        <div className="flex flex-wrap gap-2 py-4 border-b">
          <Select
            onValueChange={(e) => setEOption(e)}
            defaultValue={eOption || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="E/I 선택" />
            </SelectTrigger>
            <SelectContent>
              {mbti_e.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => setNOption(e)}
            defaultValue={nOption || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="N/S 선택" />
            </SelectTrigger>
            <SelectContent>
              {mbti_n.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => setTOption(e)}
            defaultValue={tOption || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="T/F 선택" />
            </SelectTrigger>
            <SelectContent>
              {mbti_t.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => setJOption(e)}
            defaultValue={jOption || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="J/P 선택" />
            </SelectTrigger>
            <SelectContent>
              {mbti_j.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        <Label className="font-bold text-zinc-400 mb-2">나이 (선택사항)</Label>
        <div className="pb-4 border-b">
          <Select
            onValueChange={(e) => setAge(e)}
            defaultValue={age || undefined}
          >
            <SelectTrigger className="w-[180px] text-zinc-600">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {ageData.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="justify-between mt-6">
        <AlertModal
          trigger="제출하기"
          text={confirmText}
          onConfirm={handleSubmit}
        />
      </CardFooter>
    </Card>
  );
}
