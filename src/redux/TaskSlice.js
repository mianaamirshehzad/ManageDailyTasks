import { createSlice } from '@reduxjs/toolkit'
import showToast from '../components/Toast';

const initialState = [
    {
      id: 0,
      text: "Learn React",
      completed: false
    },
    {
      id: 1,
      text: "Learn React Native ",
      completed: false
    },
    {
      id: 2,
      text: "Learn Nodejs and Python",
      completed: true
    }
  ]


export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
  }
}