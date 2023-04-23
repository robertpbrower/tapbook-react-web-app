import React, { useEffect, useState } from "react";
import ExpertReview from "./expert-review";
import { findExperReviews } from "../services/reviews/reviews-service";


function AnonContent() {


  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    const reviews = await findExperReviews();
    setReviews(reviews)
  }


  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <div>
      <h1>Expert Reviews</h1>
      <ul className="list-group">
        {
          reviews.map((review) => (
            <ExpertReview review={review} />
          ))
        }
      </ul>
    </div>
  )
}

export default AnonContent;