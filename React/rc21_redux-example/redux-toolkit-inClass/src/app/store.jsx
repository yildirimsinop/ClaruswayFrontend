import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    user: authReducer,
    // auth: authReducer,
    // api: newsReducer,
  },
});
