import { createSlice } from "@reduxjs/toolkit";

const datum = createSlice({
  name: "sdat",
  initialState: { data: "" },
  reducers: {
    updated: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updated } = datum.actions;

export default datum.reducer;
