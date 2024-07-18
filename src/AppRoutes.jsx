import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import Movie from "./pages/movie/Movie";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route?.Guard ? (
              <route.Guard>
                <route.Component />
              </route.Guard>
            ) : (
              <route.Component />
            )
          }
        />
      ))}
      <Route path="/movies/:movieId" Component={Movie} />
    </Routes>
  );
};

export default AppRoutes;
