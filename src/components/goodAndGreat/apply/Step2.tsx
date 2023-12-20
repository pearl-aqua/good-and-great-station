import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { album1, album1_1, album2 } from "@/constants/index";
import SelectButton from "../custom/SelectButton";
import answerStore from "@/lib/store/answers";

interface Props {
  setStep: (step: number) => void;
}
export default function ApplyPage({ setStep }: Props) {
  const { songs, setSongs, songsLabel } = answerStore();

  const handleClickSong = (value: string, label: string) => {
    if (songs.includes(value)) {
      const newOptions = songs.filter((el) => el !== value);
      const newSongsLabel = songsLabel().filter(
        ({ value: songValue }) => songValue !== value
      );
      setSongs(newOptions);
      // setSongsLabel(newSongsLabel);
    } else if (songs.length < 5) {
      setSongs([...songs, value]);
      // setSongsLabel([...songsLabel, { value, label }]);
    }
  };

  return (
    <>
      <CardContent className="flex flex-wrap gap-2">
        <Label>좋아하는 노래를 선택해주세요.(5곡까지 선택 가능)</Label>
      </CardContent>
      <CardContent className="flex flex-wrap gap-2">
        {album1.map(({ label, value }) => (
          <SelectButton
            key={value}
            onClick={() => handleClickSong(value, label)}
            isSelected={songs.includes(value)}
          >
            {label}
          </SelectButton>
        ))}
      </CardContent>
      <CardContent className="flex flex-wrap gap-2">
        {album1_1.map(({ label, value }) => (
          <SelectButton
            key={value}
            onClick={() => handleClickSong(value, label)}
            isSelected={songs.includes(value)}
          >
            {label}
          </SelectButton>
        ))}
      </CardContent>
      <CardContent className="flex flex-wrap gap-2">
        {album2.map(({ label, value }) => (
          <SelectButton
            key={value}
            onClick={() => handleClickSong(value, label)}
            isSelected={songs.includes(value)}
          >
            {label}
          </SelectButton>
        ))}
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" onClick={() => setStep(1)}>
          이전
        </Button>
        <Button variant="outline" onClick={() => setStep(3)}>
          다음
        </Button>
      </CardFooter>
    </>
  );
}
