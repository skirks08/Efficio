import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
};

const userPreferencesSlice = createSlice({
    name: 'userPreferences',
    initialState: { theme: getInitialTheme() },
    reducers: {
        setTheme: (state, action) => {
            if (['light', 'dark', 'highContrast'].includes(action.payload)) {
                state.theme = action.payload;
            };
            localStorage.setItem('theme', action.payload);
        },
    },
});

export const { setTheme } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;