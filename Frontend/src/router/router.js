import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../components/auth/Auth";
import Layout from "../components/layout/Layout";
import LayoutEngineer from "../components/layout/LayoutEngineer";

import ROUTES from "./ROUTES";
import Errror from "../components/error/Errror";

function Router() {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.key}
          path={route.path}
          element={
            <Auth>
              {route.isProtected ? (
                <Layout children={route.element} />
              ) : (
                route.element
              )}
            </Auth>
          }
        />
      ))}

      <Route path="*" element={<Errror />} />
    </Routes>
  );
}

export default Router;
