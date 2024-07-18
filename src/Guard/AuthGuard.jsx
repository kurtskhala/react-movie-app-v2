import React from "react";
import { useAppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import Background from "../components/background/Background";
import "./AuthGuardStyle.css";

const AuthGuard = ({ children }) => {
  const { state } = useAppContext();
  const navigate = useNavigate();
  if (!state.isUserLoggedIn) {
    return (
      <Background>
        <div className="app-guard">
          <h1 className="app-guard-header">Please Sign Up or Sign In</h1>
          <div className="app-guard-buttons">
            <button
              className="app-guard-button"
              onClick={() => {
                navigate(routes.signin);
              }}
            >
              Sign In
            </button>
            <button
              className="app-guard-button"
              onClick={() => {
                navigate(routes.signup);
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </Background>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
