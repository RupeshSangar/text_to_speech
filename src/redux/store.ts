// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // Add other slices here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
