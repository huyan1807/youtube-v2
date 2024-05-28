import { createSlice } from "@reduxjs/toolkit";
import { searchVideo } from "./action";

const initialState = {
  videoList: [],
  isLoading: false,
  isError: false,
};
const searchSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchVideo.pending, (state) => {
      //   console.log("isloading");
      state.isLoading = true;
    });
    builder.addCase(searchVideo.fulfilled, (state, action) => {
      //   console.log("success");
      state.videoList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(searchVideo.rejected, (state) => {
      state.videoList = [];
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default searchSlice.reducer;
