import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
// import { fetchPosts } from "../services/response";
import { data } from "../services/data";
const increment = createAction("increment");

type Tapp = {
  data: Tdata[];
  status?: null | "loading" | "resolved" | "rejected";
  error?: null;
};

export type Tdata = {
  category: string;
  id: string;
  img: string;
  imgBig: string;
  items: [{ title: string; price: string; img: string; imgBig: string }];
};

const slice = createSlice({
  name: "appTest",
  initialState: {
    data: data,
    status: null,
    error: null,
  } as Tapp,
  reducers: {},
  // extraReducers: {
  //   [fetchPosts.pending.toString()]: (state) => {
  //     state.status = "loading";
  //   },
  //   [fetchPosts.fulfilled.toString()]: (
  //     state,
  //     action: PayloadAction<Tdata[]>
  //   ) => {
  //     state.status = "resolved";
  //     // (state.data as any) = getData(action.payload);
  //   },
  //   [fetchPosts.rejected.toString()]: (state, action) => {
  //     state.status = "rejected";
  //     // state.error = action.payload;
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(increment, (state, action) => {
  //     (state.data as any) = data;
  //   });
  // },
});

export default slice.reducer;
