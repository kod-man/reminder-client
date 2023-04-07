import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";

// Define the initial state using that type
interface InitialState {
  filter: boolean;
  label: boolean;
  project: boolean;
}

const initialState: InitialState = {
  filter: false,
  label: false,
  project: false
};

export const refreshSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {
    refreshPage: (state, action) => {
      switch (action.payload) {
        case "Filters": {
          return {
            ...state,
            filter: !state.filter
          };
        }
        case "Labels": {
          return {
            ...state,
            label: !state.label
          };
        }
        case "Project": {
          return {
            ...state,
            project: !state.project
          };
        }
      }
    }
  }
});

export const { refreshPage } = refreshSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.refresh;

export default refreshSlice.reducer;
