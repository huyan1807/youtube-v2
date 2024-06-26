import { createSlice } from "@reduxjs/toolkit";
import { fetchAllVideo } from "./action";

const initialState = {
  videoList: [],
  isLoading: false,
  isError: false,
};
const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllVideo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllVideo.fulfilled, (state, action) => {
      state.videoList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllVideo.rejected, (state) => {
      state.videoList = [];
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default videoSlice.reducer;
