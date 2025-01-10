import { createSlice } from "@reduxjs/toolkit";

const uiStateSlice = createSlice({
    name: 'uiState',
    initialState: { modalOpen: false, currentModal: null },
    reducers: {
        toggleModal: (state, action) => {
            if (state.modalOpen && state.currentModal === action.payload) {
                state.modalOpen = false;
                state.currentModal = null;
            } else {
                state.modalOpen = true;
                state.currentModal = action.payload;
            }
        },
    },
});

export const { toggleModal } = uiStateSlice.actions;
export default uiStateSlice.reducer;