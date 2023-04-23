import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import AnonContent from "./anon-content";
import UserContent from "./user-content";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";

function Home() {

  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const goToLogin = async () => {
    navigate('/login');
  }
  const goToRegister = async () => {
    navigate('/register');
  }
  return (
    <div className="row my-2">
      <div className="col-auto">
        <NavigationSidebar />
      </div>
      <div className="col">
        <h1 className="">Home</h1>
        <div>
          <h4>
            Welcome to the Tapbook, a place to rate, share, and review your favorite beers
          </h4>
        </div>
        <div className="border border-primary rounded p-2">
          <AnonContent />
        </div>
        <div className="border border-primary rounded p-2">
          {currentUser &&
            <div>
              <h1>Your recent reviews</h1>
              < UserContent profile={currentUser} />
            </div>}
          {!currentUser &&
            <div>
              <h2>
                Please Log in or register to view your recent reviews
              </h2>
              <button className="btn btn-primary my-2" onClick={goToLogin}>Login</button>
              <button className="btn btn-primary my-2 ms-2" onClick={goToRegister}>Register</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Home;