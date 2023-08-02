import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchPosts = createAsyncThunk(
  "appName/fetchPosts",
  async (_, { rejectWithValue }) => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const res = await response.json();
      console.log(res);
      return res;
    } catch (error: unknown) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  }
);
