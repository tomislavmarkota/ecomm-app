import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number;
};

type State = {
  loading: boolean;
  products: Product[];
  error: string;
  mensClothes: Product[];
};

const initialState: State = {
  loading: false,
  products: [],
  error: "",
  mensClothes: [],
};

export const fetchProducts = createAsyncThunk(
  "project/fetchProjects",
  async () => {
    return await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message || "Something went wrong...";
    });
  },
});

export default productSlice.reducer;
