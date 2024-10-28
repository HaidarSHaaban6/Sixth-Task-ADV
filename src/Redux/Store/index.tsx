import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./../Slice/BlogSlice";
import modeReducer from "./../Slice/ModeSlice"; // استيراد مخفض الوضع

const store = configureStore({
  reducer: {
    articles: blogReducer, // الربط بالمقالات
    mode: modeReducer, // الربط بوضع الإضاءة
  },
});

export default store;
