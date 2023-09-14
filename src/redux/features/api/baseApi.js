import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog-with-redux-server-2ridhtk82-ashaansojib.vercel.app',
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => "/articles",
    }),
    postArticles: builder.mutation({
      query: (article) => ({
        url: '/articles',
        method: 'POST',
        body: article,
      })
    }),
  }),
});

export const { useGetArticlesQuery, usePostArticlesMutation } = baseApi;

export default baseApi;
