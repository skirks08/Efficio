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

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_TASKS_SUCCESS':
            return { ...state, tasks: action.payload, loading: false };
        case 'ADD_TASK_SUCCESS':
            return { ...state, tasks: [...state.tasks, action.payload], loading: false };
        case 'UPDATE_TASK_SUCCESS':
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id ? action.payload : task),
                loading: false,
            };
        case 'DELETE_TASK_SUCCESS':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
                loading: false,
            };
        case 'FETCH_TASKS_FAILURE':
        case 'ADD_TASK_FAILURE':
        case 'UPDATE_TASK_FAILURE':
        case 'DELETE_TASK_FAILURE':
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
};

export default tasksReducer;