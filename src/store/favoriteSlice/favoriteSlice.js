import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/localStorage";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: getLocalStorage("store"),
  reducers: {
    addToFavorite: (state, action) => {
      console.log(state[action.payload.id], action.payload);
      state[action.payload] = action.payload;
    },
    removeFromFavorite: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
