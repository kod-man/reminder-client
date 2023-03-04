import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";

// Define a type for the slice state
interface DrawerState {
  value: boolean;
}

// Define the initial state using that type
const initialState: DrawerState = {
  value: true
};

export const drawerSlice = createSlice({
  name: "drawer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.value = action.payload;
    }
    // Use the PayloadAction type to declare the contents of `action.payload`
  }
});

export const { toggleDrawer } = drawerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isDrawerOpen = (state: RootState) => state.drawer.value;

export default drawerSlice.reducer;
