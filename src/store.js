import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './redux/tasksSlice';
import userPreferencesReducer from './redux/userPreferencesSlice';
import uiStateReducer from './redux/uiStateSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        userPreferences: userPreferencesReducer,
        uiState: uiStateReducer,
    },
});