import { legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counterReducer";

//! store'u olusturduk
export const store = createStore(counterReducer);
