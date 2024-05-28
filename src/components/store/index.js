import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice.js";
const store = configureStore({
  reducer: {
    video: videoSlice,
  },
});
export default store;
