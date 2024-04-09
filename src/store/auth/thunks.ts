import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAuthResponse, IAuthResquest } from "../../interfaces";

export const handleLoginAsync = createAsyncThunk(
  "login",
  async (data: IAuthResquest) => {
    console.log("logout", data);
  }
);

export const handleLogoutAsync = createAsyncThunk(
  "logout",
  async (data: IAuthResponse) => {
    console.log("logout", data);
  }
);
