import { configureStore } from "@reduxjs/toolkit";
  import tasksSlice from "./TaskSlice";

export const store = configureStore({
  reducer: {
    counter: tasksSlice
  },
});

export default store;