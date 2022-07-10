import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";
import { toast } from "react-toastify";

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
        toast.info(`Increased ${action.payload.title} amount`, {
          position: "bottom-left"
        })
      } else {
        const templateProduct = { ...action.payload, amount: 1 };
        state.cart.push(templateProduct);
        toast.success(`${action.payload.title} added to cart!`, {
          position: "bottom-left"
        })
      }
    },
    decreaseCart(state, action) {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[index].amount > 1) {
        state.cart[index].amount -= 1;
        toast.warning("Decreased cart quantity", {
          position: "bottom-left"
        })
      } else if (state.cart[index].amount === 1) {
        const newArr = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = newArr;
        toast.error(`${action.payload.title} removed from cart`, {
          position: "bottom-left"
        })
      }
    },
    removeItem(state, action) {
      const newArr = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = newArr;
      toast.error(`${action.payload.title} removed from cart`, {
        position: "bottom-left"
      })
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
