import { ADD_NEW_TASK } from "./Constants";

export const addNewTask = (a) => {
  return {
    type: 'ADD_NEW_TASK',
    payload: a,
  }
};

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    id
  }
};
