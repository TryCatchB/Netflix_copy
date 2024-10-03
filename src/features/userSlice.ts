import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  password: string;
  isAuth: boolean;
}

const initialState: IUser = {
  name: "",
  password: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ name: string; password: string }>) {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.isAuth = true;

      localStorage.setItem("userName", action.payload.name);
      localStorage.setItem("isAuth", "true");
    },
    logout(state) {
      state.name = "";
      state.password = "";
      state.isAuth = false;

      localStorage.removeItem("userName");
      localStorage.removeItem("isAuth");
    },
  },
});

export const { login, logout } = userSlice.actions;
