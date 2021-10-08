import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";

const store = configureStore({ reducer: ProductReducer });
export default store;
