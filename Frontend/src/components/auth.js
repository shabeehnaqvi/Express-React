import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import LOGO from "../../logo.svg";
import ROUTES from "../router/ROUTES";
const Auth = (props) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin ? props.children : "true");
  useEffect(() => {
    let check = localStorage.getItem("user_login");
    let details = JSON.parse(check);

    if (details !== false && details !== null) {
      setIsLogin(true);
    } else {
      toast("Please login");
    }
  }, []);

  return (
    <>
      {isLogin ? (
        props.children
      ) : (
        <h4>
          You are not logged In Please Click Here
          <Link to={"/login"}>Please login</Link>
        </h4>
      )}
    </>
  );
};

export default Auth;
