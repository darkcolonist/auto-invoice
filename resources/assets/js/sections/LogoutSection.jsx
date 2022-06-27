import React from "react";

export default function LogoutSection(){
  window.location = appBaseURL + "/logout";

  return <React.Fragment>logging out</React.Fragment>;
}