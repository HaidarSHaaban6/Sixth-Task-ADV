import { createSlice } from "@reduxjs/toolkit";

const initialMode = localStorage.getItem("darkMode") === "true" ? true : false;

const initialState = {
  darkMode: initialMode,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode.toString());
    },
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
