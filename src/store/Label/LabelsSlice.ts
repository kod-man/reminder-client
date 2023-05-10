import { createSlice } from "@reduxjs/toolkit";
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
    },
    removeFavorite: (state, action) => {
      state.labels.map((label) => {
        if (label._id === action.payload.id) {
          label.isFavorite = false;
        }
      });
    }
  }
});

export const { allLabels, removeFavorite } = labelsSlice.actions;

export default labelsSlice.reducer;
