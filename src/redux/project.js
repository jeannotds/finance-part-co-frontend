import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    SET_PROJECT: (state, action) => {
      state.project = action.payload;
    },
  },
});

export const { SET_PROJECT } = projectSlice.actions;

export default projectSlice.reducer;
