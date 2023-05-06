import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = false;

export const todoSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    refreshTodos: (state) => {
      return !state;
    }
  }
});

export const { refreshTodos } = todoSlice.actions;

export default todoSlice.reducer;
