import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  isOpen: boolean;
};

const initialState: State = {
  isOpen: false,
};

export const mainState = createSlice({
  name: "mainState",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export default mainState.reducer;
export const { setIsOpen } = mainState.actions;
