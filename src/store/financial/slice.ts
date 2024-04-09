import { createSlice } from "@reduxjs/toolkit";
import { financialInitialState } from "./initialState";

export const financialSlice = createSlice({
  name: "financial",
  initialState: financialInitialState,
  reducers: {},
});
