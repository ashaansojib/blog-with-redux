import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articles: [],
};
const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState,
    reducers: {},
});

export default articlesSlice.reducer;