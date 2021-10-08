import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: { products: [], productCategories: [] },
  reducers: {
    setProducts(prevState, action) {
      prevState.products = action.payload;
    },
    setCategories(prevState, action) {
      prevState.productCategories = action.payload;
    },
  },
});

export const ProductActions = ProductSlice.actions;
const ProductReducer = ProductSlice.reducer;
export default ProductReducer;
