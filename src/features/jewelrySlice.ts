import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "./productSlice";
import axios from "axios";

type State = {
  loading: boolean;
  jewelry: Product[];
  error: string;
};

const initialState: State = {
  loading: false,
  jewelry: [],
  error: "",
};

export const fetchJewelry = createAsyncThunk(
  "jewelry/fetchJewelry",
  async () => {
    return await axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.data);
  }
);

const jewelrySlice = createSlice({
  name: "jewelrySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJewelry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJewelry.fulfilled, (state, action) => {
      state.loading = false;
      state.jewelry = action.payload;
      state.error = "";
    });
    builder.addCase(fetchJewelry.rejected, (state, action) => {
      state.loading = false;
      state.jewelry = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});


export default jewelrySlice.reducer;
