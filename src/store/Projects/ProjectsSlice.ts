import { createSlice } from "@reduxjs/toolkit";
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

export default ProjectsSlice.reducer;
