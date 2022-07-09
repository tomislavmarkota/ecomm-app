import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./productSlice";
import axios from "axios";

type State = {
  loading: boolean;
  mensClothes: Product[];
  error: string;
};

const initialState: State = {
  loading: false,
  mensClothes: [],
  error: "",
};

export const fetchMensClothes = createAsyncThunk(
  "mensClothes/fetchMensClothes",
  async () => {
    return await axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res) => res.data);
  }
);

const mensClothesSlice = createSlice({
  name: "mensClothes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMensClothes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMensClothes.fulfilled, (state, action) => {
      state.loading = false;
      state.mensClothes = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMensClothes.rejected, (state, action) => {
      state.loading = false;
      state.mensClothes = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default mensClothesSlice.reducer;
