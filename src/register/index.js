import React from "react";
import RegisterScreen from "./register";
import NavigationSidebar from "../navigation-sidebar";

function Register() {

  return (
    <div className="row my-2">
      <div className="col-auto">
        <NavigationSidebar />
      </div>
      <div className="col">
        <RegisterScreen />
      </div>
    </div>
  )
}

export default Register;