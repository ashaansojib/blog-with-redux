import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9988',
    }),
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => "/articles",
        })
    }),
    endpoints: (builder) => ({
        postArticles: builder.mutation({
            query: (article) => ({
                url: '/articles',
                method: 'POST',
                body: article,
            })
        })
    }),
    endpoints: (builder) =>({
        updatePost: builder.mutation({
            query: (category) =>({
                url: '/buk',
                method: 'POST',
                body: category,
            })
        })
    })
});
export const { useGetArticlesQuery, usePostArticlesMutation, useUpdatePostMutation } = baseApi;

export default baseApi;