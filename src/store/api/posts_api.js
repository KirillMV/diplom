import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/",
      providesTags: ["Posts"],
    }),
    getComents: builder.query({
      query: (trackId) => `/${trackId}/comments`,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetAllPostsQuery, useGetComentsQuery } = postsApi;