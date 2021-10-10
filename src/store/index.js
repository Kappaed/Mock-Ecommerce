import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ProductReducer from "./ProductSlice";
import CartReducer from "./CartSlice";

const combinedReducer = combineReducers({ ProductReducer, CartReducer });

const store = configureStore({ reducer: combinedReducer });
export default store;
