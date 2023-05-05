import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { ItemData } from "../../pages/FiltersAndLabels/components/FiltersAndLabels";

// Define the initial state using that type
interface InitialState {
  labels: ItemData[];
}

const initialState: InitialState = {
  labels: []
};

export const labelsSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {
    allLabels: (state, action) => {
      state.labels = action.payload;
    }
  }
});

export const { allLabels } = labelsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.refresh;

export default labelsSlice.reducer;
