import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";


// Type for our state
export interface UserState {
  villainName: string;
}

// Initial state
const initialState: UserState = {
  villainName: '',
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setVillainName(state, action) {
      state.villainName = action.payload;
    },
  },
});

export const { setVillainName } = userSlice.actions;

export const selectUserState = (state: AppState): UserState => state.user;

export default userSlice.reducer;