import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./features/articles/articleSlice";
import userSlice from "./features/users/userSlice";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        articles: articleSlice,
        users: userSlice,
    },
    
});
export default store;