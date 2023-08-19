import { configureStore } from "@reduxjs/toolkit";
import cartitem from "./cartSlice";
import username from "./username";
import datum from "./searchdata";

export const store = configureStore({
  reducer: {
    user: username,
    cart: cartitem,
    sdat: datum,
  },
});
