import React, { useState } from "react";
import * as userService from "../services/users/users-service";
import { useNavigate } from "react-router-dom";
function RegisterScreen() {
  const placeholder = {
    username: "alice123",
    password: "password",
    firstName: "Alice",
    lastName: "Wonderland",
    email: "alice@wonderland.com",
    isExpert: false
  }
  const [user, setUser] = useState({
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonderland",
    email: "alice@wonderland.com",
    isExpert: false
  });
  const navigate = useNavigate();
  const register = async () => {
    await userService.register(user);
    navigate("/profile");
  };
  return (
    <div>
      <h1>Register</h1>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder={placeholder.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder.firstName}
          onChange={(e) =>
            setUser({ ...user, firstName: e.target.value })
          }
        />
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder.lastName}
          onChange={(e) =>
            setUser({ ...user, lastName: e.target.value })
          }
        />
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder={placeholder.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />
        <input
          type="checkbox"
          className="m-2"
          defaultChecked={placeholder.isExpert}
          id="expert"
          onChange={(e) =>
            setUser({ ...user, isExpert: (e.target.value === "on" ? true : false) })
          }
        />
        <label className="" for="expert" >Are you an Expert?</label>
        <div></div>
        <button onClick={register} className="btn btn-primary">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterScreen;
