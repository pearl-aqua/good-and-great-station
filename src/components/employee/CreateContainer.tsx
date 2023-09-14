"use client";

import {
  ageData,
  album2_1,
  mbti_e,
  mbti_j,
  mbti_n,
  mbti_t,
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

export default function EmployeeCreateContainer({ setIsSubmit }: any) {
  const [userName, setUserName] = useState<string>("");

  const confirmText = "제출 하시겠습니까? 제출 이후에는 수정이 불가능합니다.";
  const { userId, applyNumber } = userStore();

  const getData = async () => {
    if (applyNumber) {
      const { name } = await getApplyInfo({ applyNumber });
      console.log(name);
      setUserName(name);
    }
  };

  useEffect(() => {
    getData();
  }, [applyNumber]);

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
  } = employeeStore();

  const handleClickSong = (value: string, label: string) => {
    if (newSongs.includes(value)) {
      const newOptions = newSongs.filter((el) => el !== value);
      setNewSongs(newOptions);
    } else if (newSongs.length < 2) {
      setNewSongs([...newSongs, value]);
    }
  };

  const handleSubmit = () => {
    console.log(userId, "uee");
    if (userId && applyNumber) {
      updateEmployeeData({
        userId,
        applyNumber,
        employeeData: {
          age,
          newSongs,
          mbti: [eOption, nOption, tOption, jOption],
        },
      });
      setIsSubmit(true);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Little&Freaks 직원 카드</CardTitle>
        <CardDescription>아래 내용을 작성해주세요.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <div className="flex w-full justify-between border-b">
          <div className="w-1/2">
            <Label className="font-bold text-zinc-400">이름</Label>
            <Typo.TitleLabel>{userName || "-"}</Typo.TitleLabel>
          </div>
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        <Label className="font-bold text-zinc-400 mb-2">나이(선택사항)</Label>
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
      <CardContent className="">
        <Label className=" text-zinc-400">MBTI(선택사항)</Label>
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
              <SelectValue placeholder="T/P 선택" />
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
              <SelectValue placeholder="J/F 선택" />
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
      <CardFooter className="justify-between">
        <AlertModal
          trigger="제출하기"
          text={confirmText}
          onConfirm={handleSubmit}
        />
      </CardFooter>
    </Card>
  );
}
