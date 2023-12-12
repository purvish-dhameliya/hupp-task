import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const listPosts = createAsyncThunk(
  "posts/listPosts",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/listPosts`,
        postData
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addPost = createAsyncThunk(
  "posts/addPost",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/addpost`,
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response?.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ _id: postId, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/updatepost/${postId}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ _id: postId }, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/deletepost/${postId}`
      );
      return postId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    selectedpost: null,
    loading: false,
    error: null,
    posts: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setSelectedPost: (state, action) => {
      state.selectedpost = action.payload;
    },
    resetstatus: (state) => {
      state.selectedpost = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(listPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(listPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addPost.pending, (state) => {
      // Handle success if needed
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts.push(action.payload);
    });

    builder.addCase(addPost.rejected, (state, action) => {
      // Handle errors if needed
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.selectedpost = null;
      const updatedPost = action.payload;
      const index = state.posts.findIndex((post) => post.id === updatedPost.id);

      if (index !== -1) {
        state.posts[index] = updatedPost;
      }
    });

    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;

      const deletedPostId = action.payload;
      state.posts = state.posts.filter((post) => post.id !== deletedPostId);
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, setSelectedPost, resetstatus } = postSlice.actions;

export default postSlice.reducer;
