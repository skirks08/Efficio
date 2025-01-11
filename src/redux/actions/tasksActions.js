import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { api } from "../../utils/api"; 


export const fetchTasks = () => async (dispatch) => {
    dispatch({ type: 'FETCH_TASKS_REQUEST' });
   try {
    const response = await api.get('/tasks');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
   } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', error: error.message });
   }
};

export const addTask = (task) => async (dispatch) => {
    dispatch({ type: 'ADD_TASK_REQUEST' });
    try {
        const response = await api.post('/tasks', task);
        dispatch({ type: 'ADD_TASK_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Error adding task', error.message);
    }
};

export const updateTask = (id, updates) => async (dispatch) => {
    try {
        const response = await api.put(`/tasks/${id}`, updates);
        dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'UPDATE_TASK_FAILURE', error: error.message });
    }
};

export const deleteTask = (id) => async (dispatch) => {
    try {
        await api.delete(`/tasks/${id}`);
        dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
    } catch (error) {
        dispatch({ type: 'DELETE_TASK_FAILURE', error: error.message });
    }
};



