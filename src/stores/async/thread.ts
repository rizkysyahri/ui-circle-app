import { createAsyncThunk } from "@reduxjs/toolkit";
import { getThreads, getThreadsByToken } from "../../lib/call/thread";

export const getThreadsAsync = createAsyncThunk(
  "thread/getThread",
  async () => {
    try {
      const resThread = await getThreads();

      return resThread.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getThreadByUserAsync = createAsyncThunk(
  "thread/getThreadByToken",
  async (id: number) => {
    try {
      const resThreadByToken = await getThreadsByToken(id);

      return resThreadByToken.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
