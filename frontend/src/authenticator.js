import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserAuthenticator = ({ children, loginRoute }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);

  if (!currentUser) {
    // Swal.fire({
    //   icon: "info",
    //   title: "OOps!!",
    //   text: "You must login to do that...",
    // }).then(() => {
    // });
    return <Navigate to={loginRoute} />;
  }

  return children;
};

export default UserAuthenticator;
