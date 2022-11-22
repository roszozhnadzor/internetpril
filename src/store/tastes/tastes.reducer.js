import { createSlice } from "@reduxjs/toolkit";
import {
  createTasteAction,
  deleteTasteAction,
  getTasteByIdAction,
  getTasteListAction,
} from "./tastes.action";

const initialState = {
  taste: undefined,
  tastes: [],
  error: undefined,
};

const tasteSlice = createSlice({
  name: "taste",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createTasteAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(createTasteAction.fulfilled, (state, { payload }) => {
      state.taste = payload;
    });
    builder.addCase(createTasteAction.rejected, (state, { error }) => {
      state.error = error;
    });

    builder.addCase(getTasteListAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getTasteListAction.fulfilled, (state, { payload }) => {
      state.tastes = payload;
    });
    builder.addCase(getTasteListAction.rejected, (state, { error }) => {
      state.error = error;
    });

    builder.addCase(getTasteByIdAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(getTasteByIdAction.fulfilled, (state, { payload }) => {
      state.taste = payload;
    });
    builder.addCase(getTasteByIdAction.rejected, (state, { error }) => {
      state.error = error;
    });

    builder.addCase(deleteTasteAction.pending, (state) => {
      state.error = null;
    });
    builder.addCase(deleteTasteAction.fulfilled, (state) => {});
    builder.addCase(deleteTasteAction.rejected, (state, { error }) => {
      state.error = error;
    });
  },
});

export const resetTasteState = tasteSlice.actions.reset;
export const tasteReducer = tasteSlice.reducer;
