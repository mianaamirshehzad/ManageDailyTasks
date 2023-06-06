import { createSlice } from '@reduxjs/toolkit'
import showToast from '../components/Toast';
import { ADD_NEW_TASK, DELETE_ALL, DELETE_TASK } from './Constants';

const initialState = [
  { id: 1, task: 'Buy shirt', isDone: false},
  { id: 2, task: 'Drink Coke', isDone: false},
  { id: 3, task: 'Sale bike', isDone: false},
];


export const reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return [ ...state, action.payload ];
    case DELETE_ALL:
      return [];
    case DELETE_TASK: 
      const itemsAfterDelete = state.filter((todo) => todo.id !== action.payload);
      return itemsAfterDelete;
    default: 
      return state;
  }
}