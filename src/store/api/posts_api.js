import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => '/',
      providesTags: ['Tracks'],
    }),
    
  }),
});

export const {
useGetAllPostsQuery
} = postsApi;
