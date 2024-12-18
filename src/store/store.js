import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasksSlice';
import userPreferencesReducer from './userPreferencesSlice';
import uiStateReducer from './uiStateSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        userPreferences: userPreferencesReducer,
        uiState: uiStateReducer,
    },
});