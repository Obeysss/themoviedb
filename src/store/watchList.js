import { createSlice } from "@reduxjs/toolkit";

export const watchListSlice = createSlice({
  name: "card2",
  initialState: JSON.parse(localStorage.getItem("card2")) || [],
  reducers: {
    addItem2: (state, action) => {
      let item = state.find((item) => item.id === action.payload.id);
      if (item) item.count++;
      else state.push({ ...action.payload, count: 0 });
      localStorage.setItem("card2", JSON.stringify(state));
    },
    removeItem2: (state, action) => {
      let curretCard = JSON.parse(localStorage.getItem("card2"));
      curretCard = curretCard.filter((item) => item.id !== action.payload);
      localStorage.setItem("card2", JSON.stringify(curretCard));
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem2, removeItem2 } = watchListSlice.actions;
export default watchListSlice.reducer;
