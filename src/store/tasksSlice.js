import { createSlice } from "@reduxjs/toolkit";
import AddTask from "../components/AddTask";

const initialState = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        AddTask: (state, action) => {
            state.push(action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
    },
});

export const { AddTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;