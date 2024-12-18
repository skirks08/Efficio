import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AddTask from "../components/AddTask";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await fetch('/api/tasks');
    return response.json();
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;