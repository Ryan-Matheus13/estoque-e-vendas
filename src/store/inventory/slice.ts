import { createSlice } from "@reduxjs/toolkit";
import { inventoryInitialState } from "./initialState";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: inventoryInitialState,
  reducers: {},
});
