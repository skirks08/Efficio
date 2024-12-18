import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AddTask from "../components/AddTask";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('/api/tasks');
        if (!response.ok) throw new Error('Failed to fetch tasks');
        return response.json();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

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