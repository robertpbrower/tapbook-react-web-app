import * as reviewService from "./reviews-service"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createReviewThunk = createAsyncThunk(
  "reviews/createReview",
  async (review) => {
    const newReview = await reviewService.createReview(review);
    return newReview;
  }
)


export const deleteReviewThunk = createAsyncThunk(
  "reviews/deleteReview",
  async (id) => {
    await reviewService.deleteReview(id);
    return id;
  }
);

export const updateReviewThunk = createAsyncThunk(
  "reviews/updateReview",
  async (review) => {
    const status = await reviewService.updateReview(review);
    return review;
  }
);


export const findReviewByUserThunk = createAsyncThunk(
  "reviews/findReviewByUser",
  async (userid) => {
    const reviews = await reviewService.findReviewByUser(userid);
    return reviews;
  }
);


export const findReviewByBeerThunk = createAsyncThunk(
  "reviews/findReviewByBeer",
  async (beerid) => {
    const reviews = await reviewService.findReviewByBeer(beerid);
    return reviews;
  }
);