import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./features/articles/articleSlice";

const store = configureStore({
    reducer: {
        articles: articleSlice,
    },
});
export default store;