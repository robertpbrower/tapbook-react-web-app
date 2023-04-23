import React from "react";
import LoginScreen from "./login";
import NavigationSidebar from "../navigation-sidebar";

function Login() {

  return (
    <div className="row my-2">
      <div className="col-auto">
        <NavigationSidebar />
      </div>
      <div className="col">
        <LoginScreen />
      </div>
    </div>
  )
}

export default Login;