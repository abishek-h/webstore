import { createSlice } from "@reduxjs/toolkit";

const cartitem = createSlice({
  name: "cart",
  initialState: { cartitems: JSON.parse(localStorage.getItem("cart")) || [] },
  reducers: {
    add: (state, action) => {
      const itemindex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        state.cartitems[itemindex].amount += 1;
      } else {
        state.cartitems.push({ ...action.payload, amount: 1 });
      }
    },
    removeall: (state) => {
      state.cartitems = [];
    },
    removeitem: (state, action) => {
      const newarr = state.cartitems.filter(
        (cartitems) => cartitems.id !== action.payload.id
      );
      state.cartitems = newarr;
    },
    incre: (state, action) => {
      const itemindex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartitems[itemindex].amount += 1;
    },
    decre: (state, action) => {
      const itemindex = state.cartitems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartitems[itemindex].amount < 2) {
        const newarr = state.cartitems.filter(
          (cartitems) => cartitems.id !== action.payload.id
        );
        state.cartitems = newarr;
      } else if (state.cartitems[itemindex].amount > 1) {
        state.cartitems[itemindex].amount -= 1;
      }
    },
  },
});

export const { add, removeall, incre, removeitem, decre } = cartitem.actions;

export default cartitem.reducer;
