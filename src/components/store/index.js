import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice.js";
import searchSilce from "./searchSilce.js";
const store = configureStore({
  reducer: {
    video: videoSlice,
    search: searchSilce,
  },
});
export default store;
