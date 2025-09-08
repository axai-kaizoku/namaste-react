import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
