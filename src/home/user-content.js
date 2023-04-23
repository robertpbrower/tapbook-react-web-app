import React, { useEffect, useState } from "react";
import UserReview from "./user-review";
import * as userService from "../services/reviews/reviews-service";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../services/users/users-thunks";


function UserContent({ profile }) {
  const [reviews, setReviews] = useState([])



  useEffect(() => {
    const fetchReviews = async () => {
      console.log(typeof profile)
      console.log(profile)
      console.log(profile.username)
      const reviews = await userService.findReviewByUser(profile.username);
      setReviews(reviews)
    }
    fetchReviews()
  }, [profile]);

  return (
    <div>
      {reviews &&
        <ul className="list-group">
          {reviews.length === 0 &&
            <h4>There are no recent reviews</h4>
          }
          {
            reviews.map((review) => (
              <UserReview review={review} key={review._id} />
            ))
          }
        </ul>
      }
    </div>
  )
}

export default UserContent;