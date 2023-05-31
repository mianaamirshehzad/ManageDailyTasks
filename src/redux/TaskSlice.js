import { createSlice } from '@reduxjs/toolkit'
import showToast from '../components/Toast';


// Slice Name with string to identify, an initial state, and object of reducers
export const tasksSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
    deleteTask: (state, action) => {
      return state.filter((item, index) => index !== action.payload); //Needs improvement w.r.t performance
    },
    updateTask: (state, action) => {
      let index = state.findIndex(j => j.index == state.payload )
      console.log(index);
    }
  }
})


export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;