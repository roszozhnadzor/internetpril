import { createSlice } from "@reduxjs/toolkit";
import {
  createCakeAction,
  deleteCakeAction,
  getCakeByIdAction,
  getCakeListAction,
} from "./cakes.action";

const initialState = {
  cake: undefined,
  cakes: [],
  error: undefined,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createCakeAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(createCakeAction.fulfilled, (state, { payload }) => {
      state.cake = payload;
    });
    builder.addCase(createCakeAction.rejected, (state, { error }) => {
      state.error = error;
    });

    builder.addCase(getCakeListAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getCakeListAction.fulfilled, (state, { payload }) => {
      state.cakes = payload;
    });
    builder.addCase(getCakeListAction.rejected, (state, { error }) => {
      state.error = error;
    });

    builder.addCase(getCakeByIdAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getCakeByIdAction.fulfilled, (state, { payload }) => {
      state.cake = payload;
    });
    builder.addCase(getCakeByIdAction.rejected, (state, { error }) => {
      state.error = error;
    });

    builder.addCase(deleteCakeAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(deleteCakeAction.fulfilled, (state) => {});
    builder.addCase(deleteCakeAction.rejected, (state, { error }) => {
      state.error = error;
    });
  },
});

export const resetCakeState = cakeSlice.actions.reset;
export const cakeReducer = cakeSlice.reducer;
