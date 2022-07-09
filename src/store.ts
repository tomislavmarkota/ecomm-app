import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import mainStateReducer from "./features/mainState";
import mensClothesSlice from "./features/mensClothesSlice";
import womensClothesSlice from "./features/womensClothesSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    mensClothes: mensClothesSlice,
    womensClothes: womensClothesSlice,
    mainState: mainStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
