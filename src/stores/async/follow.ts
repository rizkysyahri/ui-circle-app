import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createFollow,
  getFollowers,
  getFollowingByToken,
} from "../../lib/call/follow";

export const createFollowAsync = createAsyncThunk(
  "follow/createFollow",
  async (followingId: number, thunkAPI) => {
    try {
      const follow = await createFollow(followingId);

      return follow.data.data;
    } catch (error) {
      const err = error as unknown as Error;
      console.log(err);

      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getFollowingAsync = createAsyncThunk(
  "follow/getFollowing",
  async (followingId: number) => {
    try {
      const resFollowing = await getFollowers(followingId);
      resFollowing.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFollowingTokenAsync = createAsyncThunk(
  "follow/getFollowingToken",
  async (token: string) => {
    try {
      const { data } = await getFollowingByToken(token);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
