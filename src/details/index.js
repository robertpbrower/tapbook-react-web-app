import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavigationSidebar from "../navigation-sidebar";
import { findBeerByID } from "../services/beer/beers-service";
import ReviewForm from "./review-form";
import { findReviewByBeer } from "../services/reviews/reviews-service";
import UserReview from "../home/user-review";

function Details() {
  const { did } = useParams()
  const id = parseInt(did)
  const sampleBeer = {
    "price": "$xx.xx",
    "name": "",
    "rating": {
      "average": 0,
      "reviews": 0
    },
    "image": "/default_beer.png",
    "id": 0
  }
  const [beer, setBeer] = useState(sampleBeer);
  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    const reviews = await findReviewByBeer(id);
    setReviews(reviews)
  }

  const fetchBeer = async () => {
    const beer = await findBeerByID(id);
    setBeer(beer);
  };
  useEffect(() => {
    fetchBeer();
    fetchReviews();
  }, []);
  return (
    <div>
      <div className="row my-2">
        <div className="col-auto">
          <NavigationSidebar />
        </div>
        <div className="col">

          <h1>Beer Details</h1>

          {beer &&
            <div className="p-2 rounded border border-primary row">
              <div className="col-auto">
                <img src={beer.image} className="image-thumbnail" alt="" style={{ maxWidth: 140 }}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/default_beer.png";
                  }}></img>
              </div>
              <div className="col">
                <h4>{beer.name}</h4>
                <div>Cost: {beer.price}</div>
                <div>Average Rating: {Math.round(beer.rating.average * 100) / 100}</div>
              </div>
            </div>

          }
          <ReviewForm beer={beer} />

          <div>
            <h1>Reviews</h1>
            <ul className="list-group">
              {
                reviews.map((review) => (
                  <UserReview review={review} />
                ))
              }
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Details;