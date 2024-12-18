import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});