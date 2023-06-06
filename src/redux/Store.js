import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { reducer2 } from "./Reducer";


export const store = configureStore({
  reducer : {reducer2}
});

export default store;