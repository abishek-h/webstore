import { createSlice } from "@reduxjs/toolkit";

const username = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(localStorage.getItem("details")) || {
      username: "",
      password: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {
        username: "",
        password: "",
      };
    },
  },
});

export const { login, logout } = username.actions;

export default username.reducer;
