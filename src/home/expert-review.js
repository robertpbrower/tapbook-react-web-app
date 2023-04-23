import { useState, useEffect } from "react";
import { findBeerByID } from "../services/beer/beers-service";
import { Link } from "react-router-dom";

function ExpertReview({ review }) {


  const [beer, setBeer] = useState({});



  const fetchBeer = async () => {
    console.log(review)
    const beer = await findBeerByID(review.beerid);
    setBeer(beer)
  }

  useEffect(() => {
    fetchBeer()
  }, [])


  return (
    <li className="list-group-item p-0">
      <div className="p-2 row m-0">
        <div className="col-auto align-self-center p-1 rounded-3">
          <img src={beer.image} className="image-fluid" alt="" style={{ maxWidth: 100 }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/default_beer.png";
            }}></img>
        </div>
        <div className="col">
          <Link to={`/profile/${review.username}`} className="text-body" style={{ textDecoration: 'none' }}>
            <div className="">
              {"Review by expert: @" + review.username}
            </div>
          </Link>
          <Link to={`/details/${review.beerid}`} className="text-body" style={{ textDecoration: 'none' }}>
            <div className="fw-bold">
              {beer.name}
            </div>
          </Link>
          <div>
            {review.rating + "/5"}
          </div>
          <div className="">
            {review.body}
          </div>
        </div>
      </div>
    </li>
  );
}
export default ExpertReview;
