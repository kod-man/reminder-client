import { createSlice } from "@reduxjs/toolkit";

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
        case "Projects": {
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

export default refreshSlice.reducer;
