import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";

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

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.reminder;

export default todoSlice.reducer;
