import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createCake,
  deleteCake,
  getCakeById,
  getCakeList,
} from "../../api/cakes";

export const createCakeAction = createAsyncThunk(
  "cakes/createCake",
  async (cake) => {
    return await createCake(cake);
  }
);

export const getCakeListAction = createAsyncThunk(
  "cakes/getCakeList",
  async () => {
    return await getCakeList();
  }
);

export const deleteCakeAction = createAsyncThunk(
  "cakes/deleteCake",
  async (id) => {
    return await deleteCake(id);
  }
);

export const getCakeByIdAction = createAsyncThunk(
  "cakes/getCakeById",
  async (id) => {
    return await getCakeById(id);
  }
);
