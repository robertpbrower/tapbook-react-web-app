import { createSlice } from "@reduxjs/toolkit";

import {
  createReviewThunk,
  updateReviewThunk,
  deleteReviewThunk,
  findReviewByBeerThunk,
  findReviewByUserThunk
} from "../services/reviews/reviews-thunks"

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [createReviewThunk.fulfilled]: (state, action) => {
      state.reviews.push(action.payload);
    },
    [deleteReviewThunk.fulfilled]: (state, action) => {
      state.tuits = state.tuits.filter((review) => review._id !== action.payload);
    },
    [updateReviewThunk.fulfilled]: (state, action) => {
      state.reviews = state.reviews.map((review) =>
        review._id === action.payload._id ? action.payload : review
      );
    },

  },
});

export default reviewsSlice.reducer;
