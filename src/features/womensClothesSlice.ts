import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./productSlice";

type State = {
  loading: boolean;
  womensClothes: Product[];
  error: string;
};

const initialState: State = {
  loading: false,
  womensClothes: [],
  error: "",
};

export const fetchWomensClothes = createAsyncThunk(
  "womensClothes/fetchWomensClothes",
  async () => {
    return await axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.data);
  }
);

const womensClothesSlice = createSlice({
  name: "womensClothes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWomensClothes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWomensClothes.fulfilled, (state, action:PayloadAction<Product[]>) => {
      state.loading = false;
      state.womensClothes = action.payload;
      state.error = "";
    });
    builder.addCase(fetchWomensClothes.rejected, (state, action) => {
      state.loading = false;
      state.womensClothes = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});


export default womensClothesSlice.reducer;