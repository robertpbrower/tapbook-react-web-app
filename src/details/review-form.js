import React, { useState, useEffect } from "react";
import * as userService from "../services/users/users-service";
import { useNavigate, useParams } from "react-router-dom";
import { profileThunk, logoutThunk } from "../services/users/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk } from "../services/reviews/reviews-thunks";


function ReviewForm({ beer }) {
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const reviewClickHandler = () => {
    const review = {
      username: profile.username,
      rating: rating,
      beerid: beer.id,
      body: comment,
      byExpert: profile.isExpert
    }
    console.log(review);
    dispatch(createReviewThunk(review));
  }

  const goToLogin = async () => {
    navigate('/login');
  }
  const goToRegister = async () => {
    navigate('/register');
  }
  useEffect(() => {
    const getProfile = async () => {
      // const profile = await userService.profile();
      const action = await dispatch(profileThunk());
      setProfile(action.payload);
    };
    getProfile();
  }, []);

  return (
    <div className="row my-2">
      <div className="col">
        {!currentUser &&
          <div>
            <div>You need to login to leave a review, Please login or register below.</div>
            <button className="btn btn-primary" onClick={goToLogin}>Login</button>
            <button className="btn btn-primary my-2 ms-2" onClick={goToRegister}>Register</button>
          </div>
        }
        {profile && (
          <div className="">
            <label>Rating</label>
            {currentUser && (
              <input
                type="number"
                className="form-control"
                placeholder="Your rating out of 5"
                onChange={(e) =>
                  setRating(e.target.value)
                }
              />
            )}
            <label>Comment</label>
            {currentUser && (
              <input
                type="text"
                className="form-control"
                placeholder="Any other comments?"
                onChange={(e) =>
                  setComment(e.target.value)
                }
              />
            )}
            <button onClick={reviewClickHandler} className="btn btn-primary my-2">Submit Review</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewForm;
