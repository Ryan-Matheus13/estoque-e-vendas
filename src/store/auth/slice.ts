import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authInitialState } from "./initialState";

import { IAuthProps } from "./interfaces";
import { IAuthResponse } from "../../interfaces";

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser(state: IAuthProps, action: PayloadAction<IAuthResponse>) {
      state.user = action.payload;
    },
    removeUser(state: IAuthProps) {
      const { user } = authInitialState;
      state.user = user;
    },
  },
});
