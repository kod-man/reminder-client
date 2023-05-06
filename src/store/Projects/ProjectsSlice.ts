import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { ItemData } from "../../pages/FiltersAndLabels/components/FiltersAndLabels";

// Define the initial state using that type
interface InitialState {
  projects: ItemData[];
}

const initialState: InitialState = {
  projects: []
};

export const ProjectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    allProjects: (state, action) => {
      state.projects = action.payload;
    }
  }
});

export const { allProjects } = ProjectsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.refresh;

export default ProjectsSlice.reducer;
