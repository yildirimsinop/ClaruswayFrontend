import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

//! store'u olusturduk
// export const store = createStore(counterReducer);

const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
});

export const store = createStore(rootReducer);
