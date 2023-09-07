import { create } from "zustand";
import {
  album1,
  album1_1,
  album2,
  hahaData,
  motiveData,
  yearData,
} from "@/constants/index";
import { findLabel, filterLabel, filterOption } from "../convert";

interface StateType {
  name: string;
  setName: (name: string) => void;
  year: string;
  yearLabel: () => string | undefined;
  setYear: (year: string) => void;
  motiveOption: string[];
  motiveOptionLabel: () => string;
  setMotiveOption: (motiveOption: string[]) => void;
  motiveText: string;
  setMotiveText: (motiveText: string) => void;
  songs: string[];
  setSongs: (songs: string[]) => void;
  songsLabel: () => { label: string; value: string }[];
  // setSongsLabel: (songsLabel: { label: string; value: string }[]) => void;
  myText: string;
  setMyText: (myText: string) => void;
  character: string;
  characterLabel: () => string;
  setCharacter: (character: string) => void;
  setInfo: (state: StateType) => void;
}

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
  // songsLabel: [],
  songsLabel: () =>
    filterOption(get().songs, [...album1, ...album1_1, ...album2]),
  myText: "",
  setMyText: (myText) => set({ myText }),
  character: "",
  characterLabel: () => findLabel(get().character, hahaData),
  setCharacter: (character) => set({ character }),
  setInfo: (state) => set(state),
}));

export default answerStore;
