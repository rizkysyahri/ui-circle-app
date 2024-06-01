import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../lib/call/auth";
import { getProfile } from "../../lib/call/profile";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (body: { username: string; password: string }, thunkAPI) => {
    try {
      const res = await loginApi(body);

      const token = res.data.data;
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      const err = error as unknown as Error;
      console.log(err);

      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getProfileAsync = createAsyncThunk(
  "auth/getProfile",
  async (token: string) => {
    try {
      const { data } = await getProfile(token);

      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
