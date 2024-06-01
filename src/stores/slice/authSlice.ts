import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProfile } from "../../types/types";
import { getProfileAsync, loginAsync } from "../async/auth";

interface IAuthState {
  user: IProfile | null | undefined;
  token: string;
  loading: boolean;
  errorMessage: string;
}

const initialState: IAuthState = {
  token: "",
  user: undefined,
  loading: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    SET_LOGIN: (
      state,
      action: PayloadAction<{ user: IProfile; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    SET_LOGOUT: (state) => {
      localStorage.removeItem("token");
      state.user = undefined;
      state.token = "";
    },
  },

  extraReducers(builder) {
    //login acess
    builder.addCase(loginAsync.pending, (state) => {
      state.token = "";
      state.loading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.token = action.payload;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.token = "";
      state.errorMessage = action.payload as string;
    });

    // profile
    builder.addCase(getProfileAsync.pending, (state) => {
      state.user = undefined;
      state.loading = true;
    });
    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(getProfileAsync.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.token = "";
      state.errorMessage = action.payload as string;
    });
  },
});

export const { SET_LOGIN, SET_LOGOUT } = authSlice.actions;
export default authSlice.reducer;
