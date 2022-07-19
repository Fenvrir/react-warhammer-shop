import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  sortType: {
    name: "популярности",
    sortName: "rating",
  },
  category: null,
  currentPage: 1,
  pageCount: 3,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = [...action.payload];
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setProducts, setSortType, setCategory, setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
