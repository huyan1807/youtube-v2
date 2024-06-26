import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../api/data";

const fetchAllVideo = createAsyncThunk(
  "videolist/fetchAllVideolist",
  async (page) => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CContentDetails%2Cstatistics&chart=mostPopular&maxResults=${page}&regionCode=US&key=${API_KEY}`
    ).then((response) => response.json());
    return response;
  }
);

const searchVideo = createAsyncThunk(
  "searchlist/fetchAllVideolist",
  async (value) => {
    console.log("Action");
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}%20game&type=video&key=${API_KEY}`
    ).then((response) => response.json());
    return response;
  }
);

export { fetchAllVideo, searchVideo };
