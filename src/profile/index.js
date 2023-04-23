import React, { useState, useEffect } from "react";
import * as userService from "../services/users/users-service";
import { useNavigate, useParams } from "react-router-dom";
import { profileThunk, logoutThunk } from "../services/users/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import NavigationSidebar from "../navigation-sidebar";
import UserContent from "../home/user-content";

function Profile() {
  const { username } = useParams("");
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isCurrentUser = () => {
    return currentUser === profile;
  }

  const logout = async () => {
    // await userService.logout();
    await dispatch(logoutThunk());
    navigate("/login");
  };
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
    const getUserByUsername = async () => {
      const user = await userService.findUserByUsername(username);
      setProfile(user);
    };
    if (username) {
      getUserByUsername();
    } else {
      getProfile();
    }
  }, [dispatch, username]);
  return (
    <div className="row my-2">
      <div className="col-auto">
        <NavigationSidebar />
      </div>
      <div className="col">
        <h1>
          Profile
        </h1>
        {!isCurrentUser() && !profile &&
          <div>
            <div>You are not logged in. Please login or sign up below</div>
            <button className="btn btn-primary my-2" onClick={goToLogin}>Login</button>
            <button className="btn btn-primary my-2 ms-2" onClick={goToRegister}>Register</button>
          </div>

        }
        {profile && (
          <div>
            <label>Username</label>
            {isCurrentUser() && (
              <input
                type="text"
                className="form-control"
                value={profile.username}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />
            )}
            {!isCurrentUser() && <p>{profile.username}</p>}
            <label>First Name</label>
            {isCurrentUser() && (
              <input
                type="text"
                className="form-control"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
            )}
            {!isCurrentUser() && <p>{profile.firstName}</p>}
            <label>Last Name</label>
            {isCurrentUser() && (
              <input
                type="text"
                className="form-control"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
            )}
            {!isCurrentUser() && <p>{profile.lastName}</p>}
            {isCurrentUser() && (
              <>
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </>
            )}
            {isCurrentUser() && (
              <>
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={profile.password}
                  onChange={(e) =>
                    setProfile({ ...profile, password: e.target.value })
                  }
                />
              </>
            )}
            {profile.createdOn &&
              <>
                <label>Member Since:</label>
                <div> {profile.createdOn.substring(0, profile.createdOn.indexOf("T"))} </div>
              </>
            }
            {
              <>
                {(profile.isExpert ? "User is an Expert" : "User is not an expert")}
              </>
            }

          </div>
        )}
        {isCurrentUser() && (
          <button onClick={() => logout()} className="btn btn-danger">
            Logout
          </button>
        )}
        {profile &&
          <div>
            {isCurrentUser() &&
              <div>
                <h3>Your recent reviews</h3>
                <UserContent profile={profile} key={profile._id} />
              </div>
            }
            {!isCurrentUser() &&
              <div>
                <h3>{profile.username}'s recent reviews</h3>
                <UserContent profile={profile} key={profile._id} />
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
}

export default Profile;
