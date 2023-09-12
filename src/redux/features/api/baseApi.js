import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
        })
    }),
});
export const { useGetUsersQuery } = baseApi;
export default baseApi;