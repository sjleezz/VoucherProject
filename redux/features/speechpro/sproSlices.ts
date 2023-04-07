import { createSlice } from "@reduxjs/toolkit";

export interface Chapter {
  id: number;
  name: string;
}

export interface Sentence {
  chapterId: number;
  id: number;
  ipa: string;
  isWave: boolean;
  letters: string;
  modelGraph: string;
  phonemes: string;
  status: number;
  text: string;
  textId: string;
  textNormalized: string;
  wave: string;
  words: string;
}

export interface SpeechProDataType {
  chapters: Chapter[];
  sentences: Sentence[];
}

const initData: SpeechProDataType = {
  chapters: [
    {
      id: 0,
      name: "",
    },
  ],
  sentences: [
    {
      chapterId: 0,
      id: 0,
      ipa: "",
      isWave: false,
      letters: "",
      modelGraph: "",
      phonemes: "",
      status: 0,
      text: "",
      textId: "",
      textNormalized: "",
      wave: "",
      words: "",
    },
  ],
};

export interface SproState {
  success: string;
  data: SpeechProDataType;
}

const initialState: SproState = {
  success: "",
  data: initData,
};

const sproSlice = createSlice({
  name: "spro",
  initialState,
  reducers: {
    setChapters: (state, action) => {
      state.data.chapters = action.payload;
    },
    setSentences: (state, action) => {
      state.data.sentences = action.payload;
    },
  },
});

const { actions, reducer: sproReducer } = sproSlice;

export const { setChapters, setSentences } = actions;

export default sproReducer;
