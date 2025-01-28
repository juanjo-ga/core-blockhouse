import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User, UserState } from "../../types/User";
import { login, signin } from "../authapi/mockauth";
import { clearAuthState, saveAuthState } from "../../utils/storage";

const initialState: UserState = {
    user: null,
    isAuthed: false,
    loading: false,
    error: null,
    // If we were using user context in the backend we would use it here, but we are not so we will leave it as null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
        state.user = action.payload;
        state.isAuthed = true;
        },
        logout(state) {
            state.user = null;
            state.isAuthed = false;
            clearAuthState();
        }
    },
    extraReducers: (builder) => {
        // Loading state
        builder.addCase(login.pending, (state, action: any) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(login.rejected, (state) => {
            state.loading = false;
            state.error = "Invalid email or password";
        })
        builder.addCase(login.fulfilled, (state, action: { payload: any; }) => {
            state.loading = false;
            state.isAuthed = true;
            state.user = action.payload;
            saveAuthState(action.payload);
        })
        builder.addCase(signin.pending, (state, action: any) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(signin.rejected, (state) => {
            state.loading = false;
            state.error = "Invalid email or password";
        })
        builder.addCase(signin.fulfilled, (state, action: { payload: any; }) => {
            state.loading = false;
            state.isAuthed = true;
            state.user = action.payload;
            saveAuthState(action.payload);
        })
    },

})
export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
