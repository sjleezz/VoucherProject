import { createSlice } from "@reduxjs/toolkit";

export type BackgroundColor = string;
export type fontColor = string;
export type windowColor = string;
export type darkMode = boolean;

export interface FontType<T = string, R = number> {
  color: T;
  size: R;
}

export interface ThemeState<T = string, R = number, Q = boolean> {
  backgroundColor: T;
  fontConfig: FontType<T, R>;
  windowColor: T;
  darkMode: Q;
}

const initialState: ThemeState<string, number, boolean> = {
  backgroundColor: "",
  fontConfig: {
    color: "",
    size: 0,
  },
  windowColor: "",
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeBackground: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setThemeFontColor: (state, action) => {
      state.fontConfig.color = action.payload;
    },
    setThemeFontSize: (state, action) => {
      state.fontConfig.size = action.payload;
    },
    setThemeWindowColor: (state, action) => {
      state.windowColor = action.payload;
    },
    turnOnDarkmode: (state) => {
      state.darkMode = true;
    },
    turnOffDarkmode: (state) => {
      state.darkMode = false;
    },
  },
});

const { actions, reducer: themeReducer } = themeSlice;

export const {
    setThemeBackground,
    setThemeFontColor,
    setThemeFontSize,
    setThemeWindowColor,
    turnOnDarkmode,
    turnOffDarkmode,
} = actions;

export default themeReducer;
