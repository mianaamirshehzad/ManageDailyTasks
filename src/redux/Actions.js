import { ADD_NEW_TASK, DELETE_TASK } from "./Constants";

export const addNewTask = (payload) => {
  return {
    type: ADD_NEW_TASK,
    payload
  }
};

export const deleteAllTasks = () => {
  return {
    type: DELETE_TASK
  }
};

export const deleleTask = ( payload)=> {
  return {
    type: DELETE_TASK,
    payload
  }
}
