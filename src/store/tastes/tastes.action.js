import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTaste,
  deleteTaste,
  getTasteById,
  getTasteList,
} from "../../api/tastes";

export const createTasteAction = createAsyncThunk(
  "tastes/createTaste",
  async (cake) => {
    return await createTaste(cake);
  }
);

export const getTasteListAction = createAsyncThunk(
  "tastes/getTasteList",
  async () => {
    return await getTasteList();
  }
);

export const deleteTasteAction = createAsyncThunk(
  "tastes/deleteTaste",
  async (id) => {
    return await deleteTaste(id);
  }
);

export const getTasteByIdAction = createAsyncThunk(
  "tastes/getTasteById",
  async (id) => {
    return await getTasteById(id);
  }
);
