import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: { productList: [], productCategories: [] },
  reducers: {
    setProducts(prevState, action) {
      prevState.productList = action.payload;
    },
    setCategories(prevState, action) {
      prevState.productCategories = action.payload;
    },
  },
});

export const ProductActions = ProductSlice.actions;
export default ProductSlice.reducer;
