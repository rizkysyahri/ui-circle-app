import { createSlice } from "@reduxjs/toolkit";
import {
  createFollowAsync,
  getFollowingAsync,
  getFollowingTokenAsync,
} from "../async/follow";
import { IUser } from "../../types/types";

interface IFollow {
  following: IUser[];
  follower: IUser | null | undefined;
  loading: boolean;
  isFollowing: boolean;
}

const initialState: IFollow = {
  following: [],
  follower: undefined,
  loading: false,
  isFollowing: false,
};

const followSlice = createSlice({
  name: "follow",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createFollowAsync.fulfilled, (state, action) => {
      console.log(action);
      state.isFollowing = !state.isFollowing;
    });

    builder.addCase(getFollowingTokenAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.following = action.payload;
      state.isFollowing = true;
    });

    builder.addCase(getFollowingAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.follower = undefined;
    });
  },
});

export default followSlice.reducer;
