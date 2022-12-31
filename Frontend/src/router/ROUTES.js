import Home from "../components/home/Home";
import Jobs from "../components/jobs/Jobs";
import Profile from "../components/profile/Profile";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import Errror from "../components/error/Errror";
import LoginEngineer from "../components/login/LoginEngineer";

const ROUTES = [
  {
    key: 1,
    title: "Home",
    element: <Home />,
    path: "/home",
    isProtected: true,
    isUser: true,
  },
  {
    key: 2,
    title: "Profile",
    element: <Profile />,
    path: "/profile",
    isProtected: true,
    isUser: true,
  },
  {
    key: 3,
    title: "Jobs",
    element: <Jobs />,
    path: "/jobs",
    isProtected: true,
    isUser: false,
  },
  {
    key: 4,
    title: "Signup",
    element: <Signup />,
    path: "/signup",
    isProtected: false,
  },
  {
    key: 5,
    title: "Login",
    element: <Login />,
    path: "/login",
    isProtected: false,
  },
  {
    key: 5,
    title: "EngineerLogin",
    element: <LoginEngineer />,
    path: "/loginEngineer",
    isProtected: false,
  },
  {
    key: 7,
    title: "Error",
    element: <Errror />,
    path: "/error",
    isProtected: false,
  },
];

export default ROUTES;
