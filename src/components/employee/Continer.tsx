"use client";

import { yearData, hahaData, album1_1 } from "@/constants/index";
import { findLabel } from "@/lib/convert";
import { Label } from "@/components/ui/label";
import Typo from "../typo/Typo";
import { CardContent } from "../ui/card";
import SelectButton from "../custom/SelectButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EmployeeContainer({ applyInfoResult }: any) {
  const {
    name,
    year,
    songs,
    character,
    motiveOption,
    myText,
    motiveText,
    userId,
  } = applyInfoResult;
  const handleClickSong = (value, label) => {
    console.log(value, label);
  };
  return (
    <>
      <CardContent className="flex flex-col gap-1">
        <div className="flex w-full justify-between border-b">
          <div className="w-1/2">
            <Label className="font-bold text-zinc-400">이름</Label>
            <Typo.TitleLabel>{name}</Typo.TitleLabel>
          </div>

          <div className="w-1/4">
            <Label className="font-bold text-zinc-400">입덕 시기</Label>
            <Typo.TitleLabel>{findLabel(year, yearData)}</Typo.TitleLabel>
          </div>
        </div>
      </CardContent>
      <CardContent className="flex flex-col gap-2">
        <Label className="font-bold text-zinc-400 mb-2">
          출생연도(선택사항)
        </Label>
        <div className="pb-4 border-b">
          <Select
            onValueChange={(e) => console.log(e)}
            defaultValue={year || undefined}
          >
            <SelectTrigger className="w-[180px] text-zinc-600">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {yearData.map(({ label, value }) => (
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
          {album1_1.map(({ label, value }) => (
            <SelectButton
              key={value}
              onClick={() => handleClickSong(value, label)}
              isSelected={songs.includes(value)}
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
            onValueChange={(e) => console.log(e)}
            defaultValue={year || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {yearData.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => console.log(e)}
            defaultValue={year || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {yearData.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => console.log(e)}
            defaultValue={year || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {yearData.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => console.log(e)}
            defaultValue={year || undefined}
          >
            <SelectTrigger className="w-[100px] text-zinc-600">
              <SelectValue placeholder="선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              {yearData.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </>
  );
}
