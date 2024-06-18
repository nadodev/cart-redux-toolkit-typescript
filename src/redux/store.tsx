import { configureStore } from "@reduxjs/toolkit";
import sliceCartReducer from "./sliceCart";

const store = configureStore({
  reducer: {
    cart: sliceCartReducer,
    // Outros slices aqui
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
