import React from "react";
import SigninFrom from "../../components/signinForm/SigninForm";
import { useLocation } from "react-router-dom";
import Background from "../../components/background/Background";
import "./style.css";

const SignIn = () => {
  const location = useLocation();
  return (
    <Background>
      {location.state?.success && (
        <h1 className="app-form-registeredMessage">
          congratulations successfully registered
        </h1>
      )}
      <SigninFrom />
    </Background>
  );
};

export default SignIn;
