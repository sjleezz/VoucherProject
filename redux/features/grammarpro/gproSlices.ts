import { createSlice } from "@reduxjs/toolkit";

export interface ChangeWordType {
  idx_start: number;
  idx_end: number;
  before_change: string;
  after_change: string;
  cefr: string;
  change_type: string;
  error_type: string;
  description: string;
  change_idx: number;
}

export interface GrammarProDataType {
  full_input: string;
  full_output: string;
  changes: ChangeWordType[];
  total_summary: {
    total_cefr: string;
    total_words: number;
    change_ct_by_level: {
      B1: number;
      B2: number;
      A2: number;
      C1: number;
    };
  };
}

export interface GproState {
  success: string;
  data: GrammarProDataType;
}

export const initChangeWordData: ChangeWordType = {
  idx_start: 0,
  idx_end: 0,
  before_change: "",
  after_change: "",
  cefr: "",
  change_type: "",
  error_type: "",
  description: "",
  change_idx: 0,
};

export const initData: GrammarProDataType = {
  full_input: "",
  full_output: "",
  changes: [
    {
      idx_start: 0,
      idx_end: 0,
      before_change: "",
      after_change: "",
      cefr: "",
      change_type: "",
      error_type: "",
      description: "",
      change_idx: 0,
    },
  ],
  total_summary: {
    total_cefr: "",
    total_words: 0,
    change_ct_by_level: {
      B1: 0,
      B2: 0,
      A2: 0,
      C1: 0,
    },
  },
};

export const initialState: GproState = {
  success: "",
  data: initData,
};

const gproSlice = createSlice({
  name: "gpro",
  initialState,
  reducers: {
    setGrammarData: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { actions, reducer: gproReducer } = gproSlice;

export const { setGrammarData } = actions;

export default gproReducer;
