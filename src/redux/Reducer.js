import { createSlice } from '@reduxjs/toolkit'
import { ADD_NEW_TASK, DELETE_ALL, DELETE_TASK, UPDATE_TASK } from './Constants';

const initialState = [
];

export const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case DELETE_TASK:
      let i = action.payload;
      let newState = [...state];
      newState.splice(i, 1);
      return newState;
    // Alternative method for deleting 
    // return [...state.slice(0, i), ...state.slice(i + 1)];
    case UPDATE_TASK: 
      return [...state, action.payload] 
    default:
      return state;
  }
}