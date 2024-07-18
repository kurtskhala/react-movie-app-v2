import React from "react";
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContextProvider";
import { signOutUser } from "../../context/appActionsCreators";
import "./styles.css";

const appRoutes = Object.entries(routes);
const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  return (
    <nav className="app-navbar">
      {appRoutes.map((route) => {
        const [key, value] = route;
        if ((key === "signin" || key === "signup") && state.isUserLoggedIn) {
          return;
        }
        return (
          <button
            key={key}
            onClick={() => {
              navigate(value);
            }}
          >
            {key}
          </button>
        );
      })}
      {state.isUserLoggedIn && (
        <button
          onClick={() => {
            dispatch(signOutUser());
          }}
        >
          {" "}
          signout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
