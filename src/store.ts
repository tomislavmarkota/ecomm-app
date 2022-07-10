import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import mainStateReducer from "./features/mainState";
import mensClothesSlice from "./features/mensClothesSlice";
import womensClothesSlice from "./features/womensClothesSlice";
import jewelrySlice from "./features/jewelrySlice";
import electronicSlice from "./features/electronicSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    mensClothes: mensClothesSlice,
    cart: cartSlice,
    womensClothes: womensClothesSlice,
    jewelry: jewelrySlice,
    electronics: electronicSlice,
    mainState: mainStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
