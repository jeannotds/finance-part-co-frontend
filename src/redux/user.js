import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { SET_USER } = userSlice.actions;

export default userSlice.reducer;
