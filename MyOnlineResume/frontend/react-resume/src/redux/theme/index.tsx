import { createSlice, configureStore } from "@reduxjs/toolkit";

import { ThemeState } from "./interface";

const initialState: ThemeState = {
  currentTheme: localStorage.getItem("theme") as "light" | "dark" ?? "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeToDark(state) {
      state.currentTheme = "dark";
      localStorage.setItem("theme", "dark");
    },
    setThemeToLight(state) {
      state.currentTheme = "light";
      localStorage.setItem("theme", "light");
    },
  },
});

export const { setThemeToDark, setThemeToLight } = themeSlice.actions;

export const themeStore = configureStore({
  reducer: themeSlice.reducer
});
