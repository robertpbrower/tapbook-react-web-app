import axios from "axios";
const REVEIWS_REST_API_URL = "http://localhost:4000/api/review";

const api = axios.create({
  withCredentials: true,
});

export const createReview = async (review) => {
  const response = await api.post(REVEIWS_REST_API_URL, review);
  return response.data;
}

export const updateReview = async (review) => {
  const response = await api.put(`${REVEIWS_REST_API_URL}/${review._id}`, review);
  return response.data;
}

export const deleteReview = async (id) => {
  const response = await api.delete(`${REVEIWS_REST_API_URL}/${id}`);
  return response.data;
};

export const findReviewByUser = async (username) => {
  const response = await api.get(`${REVEIWS_REST_API_URL}/username/${username}`);
  return response.data;
};

export const findReviewByBeer = async (beerid) => {
  const response = await api.get(`${REVEIWS_REST_API_URL}/beerid/${beerid}`);
  return response.data;
};

export const findExperReviews = async () => {
  const response = await api.get(`${REVEIWS_REST_API_URL}/expert`);
  return response.data;
}
