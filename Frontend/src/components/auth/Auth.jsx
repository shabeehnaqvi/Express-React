import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    let check = localStorage.getItem("islogin");

    if (check && check === "true") {
      console.log("user is logged in");
      navigate("/home");
    } else {
      console.log("user is not logged in");
      toast("Please login");
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return <>{props.children}</>;
};

export default Auth;
