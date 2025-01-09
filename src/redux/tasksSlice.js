import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
//import AddTask from "../components/AddTask";

// Fetch Tasks 
export const fetchTasks = () => async (dispatch) => {
   try {
    const response = await axios.get('/tasks');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
   } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', error });
   }
};

export const addTask = (task) => async (dispatch) => {
    try {
        const response = await axios.post('/tasks', task);
        dispatch({ type: 'ADD_TASK_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'ADD_TASK_FAILURE', error });
    }
};

export const updateTask = (id, updates) => async (dispatch) => {
    try {
        const response = await axios.put(`/tasks/${id}`, updates);
        dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'UPDATE_TASK_FAILURE', error });
    }
};

export const deleteTask = (id) => async (dispatch) => {
    try {
        await axios.delete(`/tasks/${id}`);
        dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
    } catch (error) {
        dispatch({ type: 'DELETE_TASK_FAILURE', error });
    }
};



