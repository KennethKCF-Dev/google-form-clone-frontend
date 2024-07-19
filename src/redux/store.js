// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import formsReducer from "./slice/formsSlice";

export const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
});
