import { createSlice } from "@reduxjs/toolkit";
import { IThread } from "../../types/types";
import { getThreadByUserAsync, getThreadsAsync } from "../async/thread";

interface IinitialState {
  threads: IThread[];
}

const initialState: IinitialState = {
  threads: [],
};

const threadSlice = createSlice({
  name: "thread",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getThreadsAsync.fulfilled, (state, action) => {
      state.threads = action.payload;
    });

    // getThreadByUser
    builder.addCase(getThreadByUserAsync.fulfilled, (state, action) => {
      state.threads = action.payload;
    });
  },
});

export default threadSlice.reducer;
