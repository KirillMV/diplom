import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/posts_api";
import postsSlice from "./slices/posts_slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(postsApi.middleware),
});
