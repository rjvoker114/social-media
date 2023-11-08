import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducerjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

const { dispatch } = store;

export { store, dispatch };
