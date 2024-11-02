import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS } from "../storageKeys/Keys";

interface IUser {
  name: string;
  age: string;
  dob: string;
  city: string;
  password: string;
  isProfileComplete: boolean;
  isAuth: boolean;
}

const initialState: IUser = {
  name: localStorage.getItem(LOCAL_STORAGE_KEYS.USER_NAME) || "",
  password: localStorage.getItem(LOCAL_STORAGE_KEYS.USER_PASSWORD) || "", // not recommended
  isAuth: localStorage.getItem(LOCAL_STORAGE_KEYS.IS_AUTH) === "true",
  isProfileComplete:
    localStorage.getItem(LOCAL_STORAGE_KEYS.IS_PROFILE_COMPLETE) === "true",
  age: localStorage.getItem(LOCAL_STORAGE_KEYS.USER_AGE) || "",
  dob: localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DOB) || "",
  city: localStorage.getItem(LOCAL_STORAGE_KEYS.USER_CITY) || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ name: string; password: string }>) {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.isAuth = true;

      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_NAME, action.payload.name);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.USER_PASSWORD,
        action.payload.password
      ); // not recommended

      localStorage.setItem(LOCAL_STORAGE_KEYS.IS_AUTH, "true");
    },
    completeProfile(
      state,
      action: PayloadAction<{ age: string; dob: string; city: string }>
    ) {
      state.age = action.payload.age;
      state.dob = action.payload.dob;
      state.city = action.payload.city;
      state.isProfileComplete = true;

      localStorage.setItem(
        LOCAL_STORAGE_KEYS.USER_AGE,
        action.payload.age.toString()
      );
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_DOB, action.payload.dob);
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_CITY, action.payload.city);
      localStorage.setItem(LOCAL_STORAGE_KEYS.IS_PROFILE_COMPLETE, "true");
    },
    logout(state) {
      state.name = "";
      state.password = "";
      state.isAuth = false;
      state.isProfileComplete = false;

      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_NAME);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_PASSWORD);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_AUTH);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_AGE);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_DOB);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_CITY);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_PROFILE_COMPLETE);
    },
  },
});

export const { login, completeProfile, logout } = userSlice.actions;
