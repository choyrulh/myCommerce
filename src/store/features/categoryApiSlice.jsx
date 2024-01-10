import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "https://dummyjson.com/",
});

export const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

export const fetchDataProductsCategory = createAsyncThunk(
  "fetch/products/category",
  async (category) => {
    try {
      const response = await axiosCreate.get(`products/category/${category}`);
      // const data = JSON.parse(JSON.stringify(response.data.products));  not used
      const data = response.data.products;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product-slice",
  initialState: {
    products: [],
    status: STATUSES.IDLE,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataProductsCategory.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchDataProductsCategory.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.products = action.payload;
      })
      .addCase(fetchDataProductsCategory.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
