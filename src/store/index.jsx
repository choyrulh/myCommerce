import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/apiSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSlice.reducer,
  },
});
