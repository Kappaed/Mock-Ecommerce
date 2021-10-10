import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalPrice: 0, totalQuantity: 0 },
  reducers: {
    addProduct(state, action) {
      const productToAdd = action.payload;
      if (productToAdd === null) {
        return state;
      }
      const doesStateContainProduct = state.cartItems.some(
        (elem) => elem.id === productToAdd.id
      );
      if (doesStateContainProduct) {
        const productIndex = state.cartItems.findIndex(
          (elem) => elem.id === productToAdd.id
        );
        const chosen = { ...state.cartItems[productIndex] };
        chosen.counter += 1;
        chosen.totalPrice += productToAdd.price;
        state.cartItems[productIndex] = chosen;
      } else {
        productToAdd.counter = 1;
        productToAdd.totalPrice = productToAdd.price;
        state.cartItems.push(productToAdd);
      }
      state.totalPrice += productToAdd.price;
      state.totalQuantity += 1;
    },
    removeProduct(state, action) {
      const productToRemove = action.payload.product;
      const amountToRemove = Math.floor(action.payload.quantity);
      if (amountToRemove < 1 || productToRemove === null) {
        return state;
      }
      const doesStateContainProduct = state.cartItems.some(
        (elem) => elem.id === productToRemove.id
      );
      if (doesStateContainProduct) {
        const productIndex = state.cartItems.findIndex(
          (elem) => elem.id === productToRemove.id
        );
        const chosen = { ...state.cartItems[productIndex] };
        if (chosen.counter - amountToRemove <= 0) {
          state.totalPrice -= chosen.counter * chosen.price;
          state.totalQuantity -= chosen.counter;
          state.cartItems = state.cartItems.filter(
            (elem, index) => index !== productIndex
          );
        } else {
          chosen.counter -= amountToRemove;
          chosen.totalPrice -= chosen.price * amountToRemove;
          state.totalQuantity -= amountToRemove;
          state.totalPrice -= chosen.price * amountToRemove;
          state.cartItems[productIndex] = chosen;
        }
      } else {
        return state;
      }
    },
    setCart(state, action) {
      state.totalPrice = action.payload.totalPrice;
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.cartItems;
    },
    clearProducts(state) {
      state = [];
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice.reducer;
