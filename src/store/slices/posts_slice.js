import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "songs",
  initialState: {
    allPosts: []
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
 


  },
});

export const { getAllPosts} = postsSlice.actions;

export default postsSlice.reducer;
