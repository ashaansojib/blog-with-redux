import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../../utils/firebase.confiq";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const initialState = {
    email: '',
    name: '',
    isLoading: true,
    isError: false,
    error: '',
}
// create user
export const createUser = createAsyncThunk("userSlice/createUser", async ({ email, password, name, photo }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
    
    return {
        email: data.user.email,
        name: data.user.displayName,
    };
});
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.email = payload.email;
            state.name = payload.name;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.email = '';
                state.name = '';
                state.error = '';
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.email = payload.email;
                state.name = payload.name;
                state.error = '';
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.email = '';
                state.name = '';
                state.error = action.error.message;
            })
    }
});
export default userSlice.reducer;