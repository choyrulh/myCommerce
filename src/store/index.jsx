import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
