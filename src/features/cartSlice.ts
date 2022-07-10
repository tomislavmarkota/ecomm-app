import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

type State = {
  cart: Product[];
};

const initialState: State = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index >= 0) {
        state.cart[index].amount += 1;
      } else {
        const templateProduct = { ...action.payload, amount: 1 };
        state.cart.push(templateProduct);
      }
    },
  },
});

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;