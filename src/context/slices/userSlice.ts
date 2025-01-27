import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "../../types/User";

const initialState: UserState = {
    user: null,
    isAuthed: false,
    loading: false,
    error: null,
    // If we were using user context in the backend we would use it here, but we are not so we will leave it as null
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthed = true;
            state.user = action.payload;
        },
        signup: (state, action) => {
            state.isAuthed = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthed = false;
            state.user = null;
        }
    }
})

