import { create } from "zustand";

interface StateType {
  age: string;
  setAge: (age: string) => void;
  newSongs: string[];
  setNewSongs: (newSongs: string[]) => void;
  eOption: string;
  setEOption: (eOption: string) => void;
  nOption: string;
  setNOption: (nOption: string) => void;
  tOption: string;
  setTOption: (tOption: string) => void;
  jOption: string;
  setJOption: (jOption: string) => void;
  destroy: () => void;
  title: string;
  setTitle: (title: string) => void;
  english: string;
  setEnglish: (english: string) => void;
  albumPackage: string;
  setAlbumPackage: (albumPackage: string) => void;
}

const employeeStore = create<StateType>((set, get) => ({
  age: "",
  setAge: (age) => set({ age }),
  newSongs: [],
  setNewSongs: (newSongs) => set({ newSongs }),
  eOption: "",
  setEOption: (eOption) => set({ eOption }),
  nOption: "",
  setNOption: (nOption) => set({ nOption }),
  tOption: "",
  setTOption: (tOption) => set({ tOption }),
  jOption: "",
  setJOption: (jOption) => set({ jOption }),
  title: "",
  setTitle: (title) => set({ title }),
  english: "",
  setEnglish: (english) => set({ english }),
  albumPackage: "",
  setAlbumPackage: (albumPackage) => set({ albumPackage }),
  destroy: () =>
    set({
      age: "",
      newSongs: [],
      eOption: "",
      nOption: "",
      tOption: "",
      jOption: "",
      title: "",
      english: "",
      albumPackage: "",
    }),
}));

export default employeeStore;
