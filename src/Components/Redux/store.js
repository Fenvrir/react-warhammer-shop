import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/productsSlice";
import searchSlice from "./Slices/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    productsSlice,
  },
});
