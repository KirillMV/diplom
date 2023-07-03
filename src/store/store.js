import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/posts_api";

export const store = configureStore({
    reducer: {
      [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(postsApi.middleware),
  });
  