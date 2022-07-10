import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

type State = {
  cart: Product[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
};

const initialState: State = {
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
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
    decreaseCart(state, action) {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[index].amount > 1) {
        state.cart[index].amount -= 1;
      } else if (state.cart[index].amount === 1) {
        const newArr = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = newArr;
      }
    },
    removeItem(state, action) {
      const newArr = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = newArr;
      console.log(newArr);
    },
    calculate(state) {
      const { quantity, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { amount, price } = cartItem;
          const itemTotal = price * amount;

          cartTotal.quantity += amount;
          cartTotal.total += itemTotal;

          return cartTotal;
        },
        {
          quantity: 0,
          total: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, decreaseCart, removeItem, calculate } =
  cartSlice.actions;
