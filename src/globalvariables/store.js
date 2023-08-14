import { configureStore } from "@reduxjs/toolkit";
import cartitem from "./cartSlice";
import username from "./username";

export const store = configureStore({
  reducer: {
    user: username,
    cart: cartitem,
  },
});
