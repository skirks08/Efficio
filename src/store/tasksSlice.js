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

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [], status: 'idle'},
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        updateTask: (state, action) => {
            const index = state.tasks.findIndex((t) => t.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = { ...state.tasks[index], ...action.payload };
            }
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;