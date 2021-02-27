import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  tags: [],
  students: [],
  error: null
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getStudents(){
    try {
      const res = await axios.get('https://api.hatchways.io/assessment/students');
      dispatch({
        type: 'GET_STUDENTS',
        payload: res.data.students
      })
    } catch (err) {
      dispatch({
        type: 'STUDENT_ERROR',
        payload: err
      });
  }
}
async function addTag(tag){
  try {
    dispatch({
      type: 'ADD_TAGS',
      payload: tag
    })
  } catch (err) {
    dispatch({
      type: 'STUDENT_ERROR',
      payload: err
    });
}
}

  return (<GlobalContext.Provider value={{
    students: state.students,
    tags: state.tags,
    error: state.error,
    getStudents,
    addTag
  }}>
    {children}
  </GlobalContext.Provider>);
}
