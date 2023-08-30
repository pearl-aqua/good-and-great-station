import { hahaData, motiveData, yearData } from "@/constants/index";
import { create } from "zustand";

interface StateType {
  name: string;
  setName: (name: string) => void;
  year: string;
  yearLabel: () => string;
  setYear: (year: string) => void;
  motiveOption: string[];
  motiveOptionLabel: () => string;
  setMotiveOption: (motiveOption: string[]) => void;
  motiveText: string;
  setMotiveText: (motiveText: string) => void;
  songs: string[];
  setSongs: (songs: string[]) => void;
  songsLabel: { label: string; value: string }[];
  setSongsLabel: (songsLabel: { label: string; value: string }[]) => void;
  myText: string;
  setMyText: (myText: string) => void;
  character: string;
  characterLabel: () => string;
  setCharacter: (character: string) => void;
}

const findLabel = (selectedValue, list) => {
  const findList = list.find(({ value }) => value === selectedValue);
  return findList?.label;
};

const filterLabel = (selectedValue, list) => {
  const findList = list.filter(({ value }) => selectedValue.includes(value));
  return findList.map(({ label }) => label).join(", ");
};

const answerStore = create<StateType>((set, get) => ({
  name: "",
  setName: (name) => set({ name }),
  year: "",
  yearLabel: () => findLabel(get().year, yearData),
  setYear: (year) => set({ year }),
  motiveOption: [],
  motiveOptionLabel: () => filterLabel(get().motiveOption, motiveData),
  setMotiveOption: (motiveOption) => set({ motiveOption }),
  motiveText: "",
  setMotiveText: (motiveText) => set({ motiveText }),
  songs: [],
  setSongs: (songs) => set({ songs }),
  songsLabel: [],
  setSongsLabel: (songsLabel) => set({ songsLabel }),
  myText: "",
  setMyText: (myText) => set({ myText }),
  character: "",
  characterLabel: () => findLabel(get().character, hahaData),
  setCharacter: (character) => set({ character }),
}));

export default answerStore;
