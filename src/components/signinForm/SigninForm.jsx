import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authActions from "../../constants/auth";
import { useAppContext } from "../../context/AppContextProvider";
import { signInUser } from "../../context/appActionsCreators";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { PuffLoader } from "react-spinners";

const SigninFrom = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const { dispatch } = useAppContext();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    authHandler(authActions.signin, user)
      .then((data) => {
        dispatch(signInUser(data.token));
        navigate(routes.movies);
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
      <h2 className="app-form-header">Sign In</h2>
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
        <label htmlFor="password">password</label>
        <input
          onChange={inputChangeHandler}
          name="password"
          placeholder="password"
          type="password"
        />
      </div>

      <button className="app-form-submit" type="submit">
        Sign in
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

export default SigninFrom;
