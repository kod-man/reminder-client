import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { Reminder } from "../../pages/TodayPage/Components/types";

// Define the initial state using that type
const initialState = [] as Reminder[];

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchTodos: (state, action) => {
      state = action.payload;
      return state;
    },
    addTodo: (state, action) => {
      state = [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      state = state.filter((todo) => todo._id !== action.payload);
    }
    // Use the PayloadAction type to declare the contents of `action.payload`
  }
});

export const { fetchTodos, addTodo, deleteTodo } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todos;

export default todoSlice.reducer;
