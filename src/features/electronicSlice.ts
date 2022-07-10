import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "./productSlice";
import axios from "axios";

type State = {
  loading: boolean;
  electronics: Product[];
  error: string;
};

const initialState: State = {
  loading: false,
  electronics: [],
  error: "",
};

export const fetchElectronics = createAsyncThunk(
  "electronics/fetchelectronics",
  async () => {
    return await axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.data);
  }
);

const electronicsSlice = createSlice({
  name: "electronicsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchElectronics.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchElectronics.fulfilled, (state, action) => {
      state.loading = false;
      state.electronics = action.payload;
      state.error = "";
    });
    builder.addCase(fetchElectronics.rejected, (state, action) => {
      state.loading = false;
      state.electronics = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});


export default electronicsSlice.reducer;
