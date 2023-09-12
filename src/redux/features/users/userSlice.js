import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});
export default userSlice.reducer;