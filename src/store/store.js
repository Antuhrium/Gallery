import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favoriteSlice/favoriteSlice";
import { setLocalStorage } from "../utils/localStorage";

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
  },
});
store.subscribe(() => {
  setLocalStorage("store", store.getState().favorite);
});
