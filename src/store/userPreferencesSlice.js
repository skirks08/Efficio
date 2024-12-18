import { createSlice } from "@reduxjs/toolkit";

const userPreferencesSlice = createSlice({
    name: 'userPreferences',
    initialState: { theme: 'light'},
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;