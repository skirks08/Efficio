import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasksReducer";

// Combine reducers into Root reducer

const rootReducer = combineReducers({
    tasks: tasksReducer,
});

export default rootReducer;