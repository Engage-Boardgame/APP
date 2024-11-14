import { createSlice } from "@reduxjs/toolkit";

interface AppState {
    modal: {
        modal: string|null
    }
}

const initialState: AppState = {
    modal: {
        modal: null
    }
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setModal: (state,action) =>  {
            state.modal.modal = action.payload;
        }
    },
});

export const {
    setModal
} = appSlice.actions;

export default appSlice.reducer;
