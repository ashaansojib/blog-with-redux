import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from "../../../utils/firebase.confiq";

const initialState = {
    name: '',
    email: '',
    isLoading: true,
    isError: false,
    error: '',
}
// create user
export const createUser = createAsyncThunk("userSlice/createUser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data)
    return;
});
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state, { payload }) => {
            state.isLoading = true;
            state.isError = false;
            state.email = '';
            state.name = '';
            state.error = '';
        })
        .addCase(createUser.fulfilled, (state, {payload}) =>{
            state.isLoading = false;
            state.isError = false;
            state.email = payload.email;
            state.name = payload.name;
            state.error = '';
        })
        .addCase(createUser.rejected, (state, action) =>{
            state.isLoading =  false;
            state.isError = false;
            state.email = '';
            state.name = '';
            state.error = action.error.message;
        })
    }
});
export default userSlice.reducer;