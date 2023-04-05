import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";

// Define the initial state using that type
const initialState = false;

export const refreshSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {
    refreshPage: (state) => {
      return !state;
    }
  }
});

export const { refreshPage } = refreshSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.refresh;

export default refreshSlice.reducer;
