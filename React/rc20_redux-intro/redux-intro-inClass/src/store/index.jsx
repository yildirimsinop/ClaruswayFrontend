import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

//? reduc dev tool için eklendi
import { composeWithDevTools } from "@redux-devtools/extension";

//! store 'u olustrduk
// export const store = createStore(counterReducer)

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

// export const store = createStore(rootReducer, composeWithDevTools());

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" && composeWithDevTools()
);
