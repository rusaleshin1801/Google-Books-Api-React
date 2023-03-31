import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "all",
  sortType: "relevance",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setCategory, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
