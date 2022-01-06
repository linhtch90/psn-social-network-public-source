import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  followingAccounts: null,
  followerAccounts: null,
};

export const getFollowingAccounts = createAsyncThunk(
  "/api/v1/users/getfollowing",
  async (thunkAPI) => {
    const response = await axios({
      method: "post",
      url: "/api/v1/users/getfollowing",
      headers: {
        Authorization: localStorage.getItem("psnToken"),
      },
      data: {
        id: localStorage.getItem("psnUserId"),
      },
    });

    return response.data.payload;
  }
);

export const getFollowerAccounts = createAsyncThunk(
  "/api/v1/users/getfollower",
  async (thunkAPI) => {
    const response = await axios({
      method: "post",
      url: "/api/v1/users/getfollower",
      headers: {
        Authorization: localStorage.getItem("psnToken"),
      },
      data: {
        id: localStorage.getItem("psnUserId"),
      }
    });
    return response.data.payload;
  }
);

export const getAllAccounts = createAsyncThunk(
  "/api/v1/users",
  async (thunkAPI) => {
    const response = await axios({
      method: "post",
      url: "/api/v1/users",
      headers: {
        Authorization: localStorage.getItem("psnToken"),
      },
    });
    return response.data.payload;
  }
);

export const unfollowAccount = createAsyncThunk(
  "/api/v1/users/unfollow",
  async ({followedId, followerId}, thunkAPI) => {
    const response = await axios({
      method: "post",
      url: "/api/v1/users/unfollow",
      headers: {
        Authorization: localStorage.getItem("psnToken"),
      },
      data: {
        id1: followedId,
        id2: followerId,
      },
    });
    return response.data.payload;
  }
);

export const followAccount = createAsyncThunk(
  "/api/v1/users/follow",
  async ({followedId, followerId}, thunkAPI) => {
    const response = await axios({
      method: "post",
      url: "/api/v1/users/follow",
      headers: {
        Authorization: localStorage.getItem("psnToken"),
      },
      data: {
        id1: followedId,
        id2: followerId,
      }
    });
    return response.data.payload;
  }
);

export const followingAccountSlice = createSlice({
  name: "getFollowingAccountSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFollowingAccounts.fulfilled, (state, action) => {
      state.followingAccounts = action.payload;
    });
    builder.addCase(getFollowerAccounts.fulfilled, (state, action) => {
      state.followerAccounts = action.payload;
    });
    builder.addCase(unfollowAccount.fulfilled, (state, action) => {
      state.followingAccounts = state.followingAccounts.filter((item) => item.id !== action.payload.id);
    });
    builder.addCase(followAccount.fulfilled, (state, action) => {
    });
    builder.addCase(getAllAccounts.fulfilled, (state, action) => {
      state.followerAccounts = action.payload;
    });
  },
});

export default followingAccountSlice.reducer;
