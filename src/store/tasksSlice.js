import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AddTask from "../components/AddTask";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await fetch('/api/tasks');
    return response.json();
});

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [], status: 'idle'},
    reducers: {
        AddTask: (state, action) => {
            state.tasks.push(action.payload);
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

export const { AddTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;