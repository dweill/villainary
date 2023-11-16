import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userState.slice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
  devTools: true,
});
;
export type AppState = any;



