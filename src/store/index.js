import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./cakes/cakes.reducer";
import { tasteReducer } from "./tastes/tastes.reducer";

export const makeStore = () =>
  configureStore({
    reducer: {
      cake: cakeReducer,
      taste: tasteReducer,
    },
  });

const store = makeStore();

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;

export default store;
