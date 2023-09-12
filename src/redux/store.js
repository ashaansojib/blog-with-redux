import { configureStore, } from "@reduxjs/toolkit";
import articleSlice from "./features/articles/articleSlice";
import userSlice from "./features/users/userSlice";
import baseApi from "./features/api/baseApi";

const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        articles: articleSlice,
        users: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
export default store;