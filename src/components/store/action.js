import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../api/data";

const fetchAllVideo = createAsyncThunk(
  "videolist/fetchAllVideolist",
  async (page) => {
    console.log("Action");
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CContentDetails%2Cstatistics&chart=mostPopular&maxResults=${page}&regionCode=US&key=${API_KEY}`
    ).then((response) => response.json());
    return response;
  }
);

export { fetchAllVideo };
