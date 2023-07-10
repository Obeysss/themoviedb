import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";
import watchListSlice from "./watchList";

export const store = configureStore({
  reducer: {
    card: cardSlice,
    card2: watchListSlice,
  },
});
