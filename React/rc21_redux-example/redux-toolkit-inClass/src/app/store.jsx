import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // auth: authReducer,
    // api: newsReducer,
  },
  devTools: ProcessingInstruction.env.NODE_ENV !== "porduction",

  //? eger gelistirme asamasi production ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
});
