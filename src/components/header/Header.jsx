import React from "react";
import Navbar from "../navbar/Navbar";
import logo from "../../assets/logo.webp";
import "./styles.css";
import { useAppContext } from "../../context/AppContextProvider";

const Header = () => {
  const { state } = useAppContext();

  return (
    <div className="app-header">
      <a href="/" className="app-header-logo-link">
        <img className="app-header-logo" src={logo} alt="logo" />
      </a>
      {state.user?.userName && (
        <h2 className="app-header-user">Hello {state.user.userName}</h2>
      )}
      <Navbar />
    </div>
  );
};

export default Header;
