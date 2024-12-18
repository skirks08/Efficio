import { createSlice } from "@reduxjs/toolkit";

const uiStateSlice = createSlice({
    name: 'uiState',
    initialState: { modalOpen: false },
    reducers: {
        toggleModal: (state) => {
            state.modalOpen = !state.modalOpen;
        },
    },
});

export const { toggleModal } = uiStateSlice.actions;
export default uiStateSlice.reducer;