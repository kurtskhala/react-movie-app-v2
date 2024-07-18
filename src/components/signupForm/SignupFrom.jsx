import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authActions from "../../constants/auth";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../constants/routes";
import { PuffLoader } from "react-spinners";
import "./style.css";

const SignupFrom = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    authHandler(authActions.signup, user)
      .then(() => {
        navigate(appRoutes.signin, { state: { success: true } });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const inputChangeHandler = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="app-form" onSubmit={submitHandler}>
      <h2 className="app-form-header">Sign Up</h2>
      <div className="app-form-input-container">
        <label htmlFor="userName">userName</label>
        <input
          onChange={inputChangeHandler}
          name="userName"
          placeholder="userName"
          type="text"
        />
      </div>
      <div className="app-form-input-container">
        <label htmlFor="email">email</label>
        <input
          onChange={inputChangeHandler}
          type="email"
          name="email"
          placeholder="email"
        />
      </div>
      <div className="app-form-input-container">
        <label htmlFor="password">password</label>
        <input
          onChange={inputChangeHandler}
          name="password"
          placeholder="password"
          type="password"
        />
      </div>

      <button className="app-form-submit" type="submit">
        Sign up
      </button>
      <div className="app-form-loader">
        {loading && <PuffLoader color="#36d7b7" />}
      </div>
      <div className="app-form-error">
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>
    </form>
  );
};

export default SignupFrom;
