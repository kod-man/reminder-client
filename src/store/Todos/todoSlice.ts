import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";

// Define a type for the slice state
interface TodoState {
  value: number[];
}

// Define the initial state using that type
const initialState: TodoState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getTodoByUser: (state, action) => {
      state.value = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { getTodoByUser } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todos.value;

export default todoSlice.reducer;
