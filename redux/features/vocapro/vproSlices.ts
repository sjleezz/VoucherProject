import { createSlice } from "@reduxjs/toolkit";


export interface SentenceSummaryType {
  sentence_num_words: number;
  sentence_cefr: string;
  sentence_word_list_by_cefr: {
    A1: string[];
    A2: string[];
    B1: string[];
    B2: string[];
    C1: string[];
    C2: string[];
    unk: string[];
    stopwords: string[];
  };
  sentence_word_count_by_cefr: {
    A1: number;
    A2: number;
    B1: number;
    B2: number;
    C1: number;
    C2: number;
    unk: number;
    stopwords: number;
  };
  sentence_word_distribution_by_cefr: {
    A1: number;
    A2: number;
    B1: number;
    B2: number;
    C1: number;
    C2: number;
    unk: number;
    stopwords: number;
  };
}

export interface DescriptionType {
  level: string;
  pos: string;
  guideword: string;
  definition: string;
  dictionary_example: string[];
  learner_example: string[];
}

export interface SynonymType {
  word: string;
  cefr: string;
  html_description: string;
}

export interface WordsDetailType {
  word_idx: number;
  raw_word: string;
  cefr: string;
  stopword: boolean;
  word: string;
  lemma: string;
  pos: string;
  html_description: string;
  description: DescriptionType[];
  synonym: SynonymType[];
}

export interface SentsDetailType {
  sent_idx: number;
  raw_sentence: string;
  sentence: string;
  sentence_summary: SentenceSummaryType;
  words_detail: WordsDetailType[];
}

export interface VocaProDataType {
  total_summary: {
    total_cefr: string;
    num_sentences: number;
    total_num_words: number;
    mean_words_per_sentence: number;
    total_word_list_by_cefr: {
      A1: string[];
      A2: string[];
      B1: string[];
      B2: string[];
      C1: string[];
      C2: string[];
      unk: string[];
      stopwords: string[];
    };
    total_word_count_by_cefr: {
      A1: number;
      A2: number;
      B1: number;
      B2: number;
      C1: number;
      C2: number;
      unk: number;
      stopwords: number;
    };
    total_word_distribution_by_cefr: {
      A1: number;
      A2: number;
      B1: number;
      B2: number;
      C1: number;
      C2: number;
      unk: number;
      stopwords: number;
    };
  };
  sents_detail: SentsDetailType[];
}

export interface VproState {
  success: string;
  data: VocaProDataType;
}

const initSentsSumData : SentenceSummaryType = {
  sentence_num_words: 0,
  sentence_cefr: '',
  sentence_word_list_by_cefr: {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: [],
    unk: [],
    stopwords: [],
  },
  sentence_word_count_by_cefr: {
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0,
    C1: 0,
    C2: 0,
    unk: 0,
    stopwords: 0,
  },
  sentence_word_distribution_by_cefr: {
    A1: 0,
    A2: 0,
    B1: 0,
    B2: 0,
    C1: 0,
    C2: 0,
    unk: 0,
    stopwords: 0,
  },
}

export const initSynonymData : SynonymType = {
  word: '',
  cefr: '',
  html_description: '',
}

export const initDescriptionData : DescriptionType = {
  level: '',
  pos: '',
  guideword: '',
  definition: '',
  dictionary_example: [],
  learner_example: [],
}

export const initWordsDetailData : WordsDetailType = {
  word_idx: 0,
  raw_word: '',
  cefr: '',
  stopword: false,
  word: '',
  lemma: '',
  pos: '',
  html_description: '',
  description: [],
  synonym: [],
}

export const initSentsDetailData : SentsDetailType = {
  sent_idx: 0,
  raw_sentence: '',
  sentence: '',
  sentence_summary: initSentsSumData,
  words_detail: [],
}

export const initVproData: VocaProDataType = {
  total_summary: {
    total_cefr: '',
    num_sentences: 0,
    total_num_words: 0,
    mean_words_per_sentence: 0,
    total_word_list_by_cefr: {
      A1: [],
      A2: [],
      B1: [],
      B2: [],
      C1: [],
      C2: [],
      unk: [],
      stopwords: [],
    },
    total_word_count_by_cefr: {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0,
      unk: 0,
      stopwords: 0,
    },
    total_word_distribution_by_cefr: {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0,
      unk: 0,
      stopwords: 0,
    },
  },
  sents_detail: [],
};

export const initialState: VproState = {
  success: "",
  data: initVproData,
};

const vproSlice = createSlice({
  name: "vpro",
  initialState,
  reducers: {
    setVocaData: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { actions, reducer: vproReducer } = vproSlice;

export const { setVocaData } = actions;

export default vproReducer;
