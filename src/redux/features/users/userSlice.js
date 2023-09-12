import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Asha Sojib',
    email: 'asha@gmail.com',
    isLoading: true,
    isError: false,
    error: '',
}
// create user
export const createUser = createAsyncThunk("userSlice/createUser", async() => {
    
})
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});
export default userSlice.reducer;