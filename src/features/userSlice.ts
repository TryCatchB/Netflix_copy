import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  name: string;
  age: number;
  dob: string;
  city: string;
  password: string;
  isProfileComplete: boolean;
  isAuth: boolean;
}

const initialState: IUser = {
  name: "",
  password: "",
  age: 0,
  dob: "",
  city: "",
  isAuth: false,
  isProfileComplete: false,
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
      localStorage.setItem("userPassword", action.payload.password); // not recommended
      localStorage.setItem("isAuth", "true");
    },
    completeProfile(
      state,
      action: PayloadAction<{ age: number; dob: string; city: string }>
    ) {
      state.age = action.payload.age;
      state.dob = action.payload.dob;
      state.city = action.payload.city;
      state.isProfileComplete = true;

      localStorage.setItem("userAge", action.payload.age.toString());
      localStorage.setItem("userDob", action.payload.dob);
      localStorage.setItem("userCity", action.payload.city);
      localStorage.setItem("isProfileComplete", "true");
    },
    logout(state) {
      state.name = "";
      state.password = "";
      state.isAuth = false;
      state.isProfileComplete = false;

      localStorage.removeItem("userName");
      localStorage.removeItem("userPassword");
      localStorage.removeItem("isAuth");
      localStorage.removeItem("userAge");
      localStorage.removeItem("userDob");
      localStorage.removeItem("userCity");
      localStorage.removeItem("isProfileComplete");
    },
  },
});

export const { login, completeProfile, logout } = userSlice.actions;
