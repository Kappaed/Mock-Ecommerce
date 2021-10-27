import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductReducer from "./ProductSlice";
import CartReducer from "./CartSlice";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

const combinedReducer = combineReducers({ ProductReducer, CartReducer });
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export const persistedStore = persistStore(store);
export default store;
