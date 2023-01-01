import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // const getuserArr = JSON.parse(localStorage.getItem("user_data"));
    let getuserArr = "";
    const data = {
      email: "arslan@gmail.com",
      password: "arslan759",
    };
    // fetch("http://localhost:5000/teacher/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data2) => console.log(data2));
    fetch("http://localhost:5000/teacher/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(inpval),
    })
      .then((response) => response.json())
      .then((data2) => {
        console.log(data2);
        if (data2["message"] == "success") {
          history("/home");
          toast.success("Welcome " + data2.User.name);
          localStorage.setItem("user_login", JSON.stringify(data2));
          localStorage.setItem("islogin", true);
        }

      });
  };

  return (
    <div
      className="my-container"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-3 text-center w-25">
        <div
          className="row col-md-12 col-sm-12 col-lg-12 col-xl-12 border rounded-5"
          style={{ background: `rgba(255, 255, 255, 0.5)` }}
        >
          <div className="mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center mb-5">User Login</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-12"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Don't Have an Account?{" "}
              <span
                style={{ color: "rgb(67, 185, 127)", cursor: "pointer" }}
                onClick={() => {
                  history("/signup");
                }}
              >
                Register Now
              </span>{" "}
            </p>
            <p className="mt-3">
              Registered as an Engineer?{" "}
              <span
                style={{ color: "rgb(67, 185, 127)", cursor: "pointer" }}
                onClick={() => {
                  history("/loginEngineer");
                }}
              >
                Click Here
              </span>{" "}
            </p>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
