import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: JSON.parse(localStorage.getItem("card")) || [],
  reducers: {
    addItem: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);
      if (item) item.count++;
      else state.push({ ...action.payload, count: 0 });
      localStorage.setItem("card", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      let curretCard = JSON.parse(localStorage.getItem("card"));
      curretCard = curretCard.filter((item) => item.id !== action.payload);
      localStorage.setItem("card", JSON.stringify(curretCard));
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cardSlice.actions;
export default cardSlice.reducer;
